import { Component } from '@angular/core';
import { HistoryPageComponent } from '../history-page/history-page.component';
import { GetRealTimeDataService } from "../../services/get-real-time-data.service";
import { GetClientInfoService } from "../../services/get-client-info.service";

//noinspection TypeScriptCheckImport
import * as _ from "lodash";
@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
    constructor(public _getRealTimeDataService:GetRealTimeDataService,
                public _getClientInfoService:GetClientInfoService) { }

    //資料
    public realTimeAirData:Array<any> = this._getRealTimeDataService.data;
    private tempRealTimeAirData:Array<any> = _.cloneDeep(this.realTimeAirData);
    public clientInfo = this._getClientInfoService.clientInfo;
    //panel的顏色class
    public panelClass:Array<string> = [];

    ngOnInit() {
        this._getClientInfoService.getClientDataHttpWithPromise().then((res)=>{
            this.clientInfo = res;
            this._getRealTimeDataService.getRealTimeAirDataHttpWithPromise().then((res)=>{
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
                let temp25 = 0;
                let temp10 = 0;

                let pm25 = Number(value.pm25);
                let pm10 = Number(value.pm10);
                //顏色及數值依照政府標準
                //https://taqm.epa.gov.tw/taqm/tw/b0201.aspx
                switch (true){
                    case (pm25<=15.4):                        //green
                        temp25 = 1;
                        break;
                    case (pm25>=15.5 && pm25<=35.4):    //yellow
                        temp25 = 2;
                        break;
                    case (pm25>=35.5 && pm25<=54.4):    //orange
                        temp25 = 3;
                        break;
                    case (pm25>=54.5 && pm25<=150.4):   //red
                        temp25 = 4;
                        break;
                    case (pm25>=150.5 && pm25<=250.4):  //purple
                        temp25 = 5;
                        break;
                    case (pm25>=250.5):                       //maroon
                        temp25 = 6;
                        break;
                }
                switch (true){
                    case (pm10<=54):
                        temp10 = 1;
                        break;
                    case (pm10>=55 && pm10<=125):
                        temp10 = 2;
                        break;
                    case (pm10>=126 && pm10<=254):
                        temp10 = 3;
                        break;
                    case (pm10>=255 && pm10<=354):
                        temp10 = 4;
                        break;
                    case (pm10>=355 && pm10<=424):
                        temp10 = 5;
                        break;
                    case (pm10>=425):
                        temp10 = 6;
                        break;
                }

                let AQI = Math.max(temp10, temp25);

                if(AQI!=0) {
                    if(AQI>=3){
                        //震動特效
                        this.panelClass[index] = `AQI${AQI} a-ring`;
                    }else{
                        this.panelClass[index] = "AQI" + AQI;
                    }
                }else{
                    console.log(`Calc AQI Level Error. PM2.5: ${pm25}, PM10: ${pm10}`);
                }
            });
        }
    }
}
