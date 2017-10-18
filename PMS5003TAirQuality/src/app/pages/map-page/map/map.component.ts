import { Component, Input } from '@angular/core';

import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

//noinspection TypeScriptCheckImport
import * as _ from "lodash";

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
    //縮放比例14，在1280*1024之畫面顯示良好
    public zoom: number = 14;
    //測站資料
    public clientInfo = this._getClientInfoService.clientInfo;
    public clientInfoNum;
    private tempClientInfo = this.clientInfo;

    ngOnInit() {
        this._getClientInfoService.getClientDataHttpWithPromise().then((res)=>{
            this.convertLatLngToNumber(this.clientInfo);
        })
    }
    ngDoCheck() {
        //
        if(!_.isEqual(this.clientInfo,this.tempClientInfo)) {
            this.convertLatLngToNumber(this.clientInfo);
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
}

