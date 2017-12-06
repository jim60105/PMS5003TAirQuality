import { Component } from '@angular/core';
import { HistoryPageComponent } from '../history-page/history-page.component';
import { GetSingleDataService } from "../../services/get-single-data.service";
import { GetClientInfoService } from "../../services/get-client-info.service";

import { CalcAQIComponent } from "../../calc-AQI.component";
//noinspection TypeScriptCheckImport
import * as _ from "lodash";
@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
    constructor(public _getRealTimeDataService:GetSingleDataService,
                public _getClientInfoService:GetClientInfoService) { }

    private _calcAQI = new CalcAQIComponent();

    //資料
    public realTimeAirData:Array<any> = this._getRealTimeDataService.data;
    private tempRealTimeAirData:Array<any> = _.cloneDeep(this.realTimeAirData);
    public clientInfo = this._getClientInfoService.clientInfo;
    //panel的顏色class
    public panelClass:Array<string> = [];

    ngOnInit() {
        this._getClientInfoService.getClientDataHttpWithPromise().then((res)=>{
            this.clientInfo = res;
            this._getRealTimeDataService.getSingleDataHttpWithPromise().then((res)=>{
                this.realTimeAirData = this._getRealTimeDataService.data;
            });
        });
        if(_.isEqual(this.realTimeAirData,this.tempRealTimeAirData)&&this.realTimeAirData.length!=0) {
            this.calcAQI();
        }
    }

    ngDoCheck() {
        //realTime改變時觸發AQI計算
        //noinspection TypeScriptValidateJSTypes
        if(!_.isEqual(this.realTimeAirData,this.tempRealTimeAirData)) {
            this.tempRealTimeAirData = _.cloneDeep(this.realTimeAirData);
            this.calcAQI();
        }
    }

    //計算AQI顏色
    private calcAQI(){
        if(this.realTimeAirData[0]!==undefined){
            this.panelClass.length = 0;
            this.realTimeAirData.forEach((value,index,array)=>{
                let AQI = this._calcAQI.calc(value.pm25,value.pm10);

                if(AQI!=0) {
                    if(AQI>=3){
                        //震動特效
                        this.panelClass[index] = `AQI${AQI} a-ring`;
                    }else{
                        this.panelClass[index] = "AQI" + AQI;
                    }
                }else{
                    console.log(`Calc AQI Level Error. PM2.5: ${value.pm25}, PM10: ${value.pm10}`);
                }
            });
        }
    }
}
