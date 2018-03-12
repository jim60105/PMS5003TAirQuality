import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

//noinspection TypeScriptCheckImport
import * as _ from "lodash";
declare var $:any;

import { GetClientInfoService } from "../../../services/get-client-info.service";

import { CalcAQIComponent } from "../../../calc-AQI.component";
export class dataObject{
    lat: any;
    lng: any;
    name: string;
}

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})
export class MapComponent {
    //Marker顯示文字
    @Input() mapMarkerText;
    //Loading蓋版
    @Output() loadingOut = new EventEmitter();
    loading = false;
    private tempMapMarkerText;
    constructor(private http:Http,
                private _getClientInfoService:GetClientInfoService) {}

    private _calcAQI = new CalcAQIComponent();
    //以東海大學為中心
    public lat: number = 24.1814718;
    public lng: number = 120.6053346;
    public zoom: number = 14;
    //測站資料
    public clientInfo = this._getClientInfoService.clientInfo;
    public clientInfoNum;
    private tempClientInfo = this.clientInfo;
    private calcCenterFinish = false;
    private calcAQIFinish = false;

    //AQIIconUrl
    private icon:string[] = [
        "assets/pic/AQI1.png",
        "assets/pic/AQI2.png",
        "assets/pic/AQI3.png",
        "assets/pic/AQI4.png",
        "assets/pic/AQI5.png",
        "assets/pic/AQI6.png"
    ];

    ngOnInit() {
        this.loading = true;
        this.loadingOut.emit(true);
        this._getClientInfoService.getClientDataHttpWithPromise().then((res)=>{
            this.convertLatLngToNumber(res);
            this.clientInfo = res;
        })
    }
    ngDoCheck() {
        if(!_.isEqual(this.clientInfo,this.tempClientInfo)) {
            this.loading = true;
            this.loadingOut.emit(true);
            this.convertLatLngToNumber(this.clientInfo);
        }
        if(!_.isEqual(this.mapMarkerText,this.tempMapMarkerText)){
            this.tempMapMarkerText = _.cloneDeep(this.mapMarkerText);
            this.loading = true;
            this.loadingOut.emit(true);
            this.calcAQI();
        }
    }

    calcAQI(){
        if(this.mapMarkerText!==undefined) {
            this.mapMarkerText.forEach((value, index, array)=> {
                //noinspection TypeScriptUnresolvedVariable
                let AQI = this._calcAQI.calc(value.pm25, value.pm10);

                if (AQI > 0 && AQI <= 6) {
                    this.mapMarkerText[index].icon = this.icon[AQI - 1];
                } else {
                    //noinspection TypeScriptUnresolvedVariable
                    console.log(`Calc AQI Level Error. PM2.5: ${value.pm25}, PM10: ${value.pm10}`);
                }
            });

            this.calcAQIFinish = true;
            this.loading = !(this.calcAQIFinish && this.calcCenterFinish);
            this.loadingOut.emit(!(this.calcAQIFinish && this.calcCenterFinish));
        }
    }

    //將資料內的數字字串轉為數字格式
    convertLatLngToNumber(data: dataObject[]){
        data.forEach(function(value,index,array){
            //console.log(devices[index].lat);
            data[index].lat = Number(data[index].lat);
            data[index].lng = Number(data[index].lng);
        });

        this.clientInfoNum = data;
        this.tempClientInfo = _.cloneDeep(this.clientInfo);
        this.calcCenter();
    }

    //計算中心並調整縮放比例
    calcCenter(){
        let latMin:number;
        let latMax:number;
        let lngMin:number;
        let lngMax:number;
        this.clientInfoNum.forEach((value,index,array)=>{
            //noinspection TypeScriptUnresolvedVariable
            latMin = (latMin<value.lat)?latMin:value.lat;
            //noinspection TypeScriptUnresolvedVariable
            latMax = (latMax>value.lat)?latMax:value.lat;
            //noinspection TypeScriptUnresolvedVariable
            lngMin = (lngMin<value.lng)?lngMin:value.lng;
            //noinspection TypeScriptUnresolvedVariable
            lngMax = (lngMax>value.lng)?lngMax:value.lng;
        });
        this.lat = (latMin+latMax)/2;
        this.lng = (lngMin+lngMax)/2;

        this.zoom = Math.round($(window).width()/700+12.8);
        this.calcCenterFinish = true;
        this.loading = !(this.calcAQIFinish && this.calcCenterFinish);
        this.loadingOut.emit(!(this.calcAQIFinish && this.calcCenterFinish));
    }
}

