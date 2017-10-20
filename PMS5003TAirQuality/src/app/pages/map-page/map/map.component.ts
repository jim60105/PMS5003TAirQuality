import { Component, Input } from '@angular/core';

import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

//noinspection TypeScriptCheckImport
import * as _ from "lodash";
declare var $:any;

import { GetClientInfoService } from "../../../services/get-client-info.service";

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
    constructor(private http:Http,
                private _getClientInfoService:GetClientInfoService) {}

    //以東海大學為中心
    public lat: number = 24.1814718;
    public lng: number = 120.6053346;
    public zoom: number = 14;
    //測站資料
    public clientInfo = this._getClientInfoService.clientInfo;
    public clientInfoNum;
    private tempClientInfo = this.clientInfo;

    ngOnInit() {
        this._getClientInfoService.getClientDataHttpWithPromise().then((res)=>{
            this.convertLatLngToNumber(this.clientInfo);
            this.calcCenter();
        })
    }
    ngDoCheck() {
        //
        if(!_.isEqual(this.clientInfo,this.tempClientInfo)) {
            this.convertLatLngToNumber(this.clientInfo);
            this.calcCenter();
        }
    }

    //將資料內的數字字串轉為數字格式
    convertLatLngToNumber(data: dataObject[]){
        data.forEach(function(value,index,array){
            //console.log(clientInfo[index].lat);
            data[index].lat = Number(data[index].lat);
            data[index].lng = Number(data[index].lng);
        });

        this.clientInfoNum = data;
        this.tempClientInfo = _.cloneDeep(this.clientInfo);
    }

    //計算中心並調整縮放比例
    calcCenter(){
        let latMin:number;
        let latMax:number;
        let lngMin:number;
        let lngMax:number;
        this.clientInfoNum.forEach((value,index,array)=>{
            latMin = (latMin<value.lat)?latMin:value.lat;
            latMax = (latMax>value.lat)?latMax:value.lat;
            lngMin = (lngMin<value.lng)?lngMin:value.lng;
            lngMax = (lngMax>value.lng)?lngMax:value.lng;
        });
        this.lat = (latMin+latMax)/2;
        this.lng = (lngMin+lngMax)/2;

        this.zoom = Math.round($(window).width()/700+12.8);
    }
}

