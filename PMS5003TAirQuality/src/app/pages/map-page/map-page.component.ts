import { Component, Input } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { CLIENTINFO } from '../../../assets/mock-clientInfo';
@Component({
    selector: 'app-map-page',
    templateUrl: './map-page.component.html',
    styleUrls: ['./map-page.component.css']
})
export class MapPageComponent {
    @Input() mapMarkerText: Object = {};

    lat: number = 24.1814718;
    lng: number = 120.6053346;
    zoom: number = 15;
    clientDatas:Object[] = [];
    private dbURL = "/assets/php/getClientInfo.php";

    constructor(private http:Http) {}

    ngOnInit() {
        this.convertLatLngToNumber(CLIENTINFO); //Use mock data
        this.getClientDataHttp();
    }

    getClientDataHttp(){
        //noinspection TypeScriptUnresolvedFunction
        return this.http.get(this.dbURL).map((res:Response) => {
            let body = res.json();
            return body || {};
        }).subscribe((dataIn)=> {
            //console.log(dataIn.toString());
            this.convertLatLngToNumber(dataIn);
        }, (err)=> {
            console.error("Err: " + err);
        });
    }

    convertLatLngToNumber(datas: dataObject[]){
        datas.forEach(function(value,index,array){
            //console.log(clientDatas[index].lat);
            datas[index].lat = Number(datas[index].lat);
            datas[index].lng = Number(datas[index].lng);
        });

        this.clientDatas = datas;
    }
}

export class dataObject{
    lat: any;
    lng: any;
    name: string;
}