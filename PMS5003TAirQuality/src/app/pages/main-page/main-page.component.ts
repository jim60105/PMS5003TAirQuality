import { Component } from '@angular/core';
import { HistoryPageComponent } from '../history-page/history-page.component';
import { GetSingleDataService } from "../../services/get-single-data.service";
import { GetClientInfoService } from "../../services/get-client-info.service";
import { GetSingleLASSDataService } from "../../services/get-single-lassdata.service";
import { GetLassDeviceService } from "../../services/get-lassdevice.service";
import { GetUserDeviceService } from "../../services/get-user-device.service";

import { CalcAQIComponent } from "../../calc-AQI.component";
import { Cookie } from 'ng2-cookies';
//noinspection TypeScriptCheckImport
import * as _ from "lodash";
import * as moment from 'moment';
@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
    constructor(public _getRealTimeDataService:GetSingleDataService,
                public _getLASSRealTimeDataService:GetSingleLASSDataService,
                public _getClientInfoService:GetClientInfoService,
                public _getUserDeviceService:GetUserDeviceService,
                public _getLassDeviceService:GetLassDeviceService) { }

    private _calcAQI = new CalcAQIComponent();
    //資料
    public realTimeAirData:Array<any> = this._getLASSRealTimeDataService.data;
    private tempRealTimeAirData:Array<any> = _.cloneDeep(this.realTimeAirData);
    public clientInfo = this._getClientInfoService.clientInfo;
    //panel的顏色class
    public panelClass:Array<string> = [];
    public LASSDeviceList = this._getLassDeviceService.LASSDeviceList;

    //Loading蓋版
    public loading = true;
    ngOnInit() {
        //this._getClientInfoService.getClientDataHttpWithPromise().then((res)=>{
        //    this.devices = res;
        //    this._getRealTimeDataService.getSingleDataHttpWithPromise().then((res)=>{
        //        this.realTimeAirData = this._getRealTimeDataService.data;
        //    });
        //});
        this.loading = true;
        if(Cookie.check("_p")){
            //已登入
            this._getUserDeviceService.getUserDevicesHttpWithPromise().then((res)=>{
                this._getLassDeviceService.setLASSDeviceList(res);
            });

        }else {
            //未登入
            this._getLassDeviceService.setLASSDeviceList();
        }
        let interval = setInterval(() => {
            this.LASSDeviceList = this._getLassDeviceService.LASSDeviceList;
            if(this.LASSDeviceList.length!=0) {
                this.getLASSRealTimeData();
                clearTimeout(interval);
            }
        }, 500);

        if(_.isEqual(this.realTimeAirData,this.tempRealTimeAirData)&&this.realTimeAirData.length!=0) {
            this.calcAQI();
        }
    }

    ngDoCheck() {
        //realTime改變時觸發AQI計算
        //noinspection TypeScriptValidateJSTypes
        if(!_.isEqual(this.realTimeAirData,this.tempRealTimeAirData)) {
            this.calcAQI();
            this.tempRealTimeAirData = _.cloneDeep(this.realTimeAirData);
        }
    }

    //計算AQI顏色
    private calcAQI(){
        if(this.realTimeAirData[0]!==undefined){
            this.panelClass.length = 0;
            this.realTimeAirData.forEach((value,index,array)=>{
                //noinspection TypeScriptValidateTypes
                if((moment().valueOf()-moment(value.time).valueOf())>3600000){
                    this.panelClass[index] = "disabled";
                }else {
                    let AQI = this._calcAQI.calc(value.pm25, value.pm10);

                    if (AQI != 0) {
                        if (AQI >= 3) {
                            //震動特效
                            this.panelClass[index] = `AQI${AQI} a-ring`;
                        } else {
                            this.panelClass[index] = "AQI" + AQI;
                        }
                    } else {
                        console.log(`Calc AQI Level Error. PM2.5: ${value.pm25}, PM10: ${value.pm10}`);
                    }
                }
            });
        }
        this.loading = false;
    }

    private getLASSRealTimeData(){
        this._getLASSRealTimeDataService.setParam(this.LASSDeviceList);
        this._getLASSRealTimeDataService.getSingleDataHttpWithPromise().then((res)=>{
            this.realTimeAirData = this._getLASSRealTimeDataService.data;
        });
    }
}
