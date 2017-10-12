import { Component, Input } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
//noinspection TypeScriptCheckImport
import * as _ from "lodash";

import { GetClientInfoService } from "../../../services/get-client-info.service";
@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})
export class MapComponent {
    @Input() mapMarkerText;
    constructor(private http:Http,
                private _getClientInfoService:GetClientInfoService) {}

    public lat: number = 24.1814718;
    public lng: number = 120.6053346;
    public zoom: number = 15;
    public clientInfo = this._getClientInfoService.clientInfo;
    private tempClientInfo = this.clientInfo;

    ngOnInit() {
        this.convertLatLngToNumber(this.clientInfo);
        this._getClientInfoService.getClientDataHttpWithPromise().then((res)=>{
            this.clientInfo = res;
            this.convertLatLngToNumber(this.clientInfo);
        })
    }
    ngDoCheck() {
        if(!_.isEqual(this.clientInfo,this.tempClientInfo)) {
            this.convertLatLngToNumber(this.clientInfo);
        }
    }

    convertLatLngToNumber(datas: dataObject[]){
        datas.forEach(function(value,index,array){
            //console.log(clientInfo[index].lat);
            datas[index].lat = Number(datas[index].lat);
            datas[index].lng = Number(datas[index].lng);
        });

        this.clientInfo = datas;
    }
}

export class dataObject{
    lat: any;
    lng: any;
    name: string;
}