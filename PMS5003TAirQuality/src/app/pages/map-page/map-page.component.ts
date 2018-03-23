import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LatLngLiteral, LatLngBoundsLiteral, LatLngBounds } from "@agm/core/map-types";
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

//noinspection TypeScriptCheckImport
import * as _ from "lodash";
declare var $:any;

import { GetClientInfoService } from "../../services/get-client-info.service";

import { CalcAQIComponent } from "../../calc-AQI.component";
import { GetLassDeviceService } from "../../services/get-lassdevice.service";
import { GetUserDeviceService } from "../../services/get-user-device.service";
import { GetLASSDataService } from "../../services/get-lassdata.service";
import { Cookie } from 'ng2-cookies';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css'],
})
export class MapPageComponent {
  //Loading蓋版
  loading = false;
  constructor(private http:Http,
              private _getClientInfoService:GetClientInfoService,
              private _getLassDeviceService:GetLassDeviceService,
              private _getUserDeviceService:GetUserDeviceService,
              private _getLassDataService:GetLASSDataService) {}

  private _calcAQI = new CalcAQIComponent();
  //以東海大學為中心
  public lat: number = 24.1814718;
  public lon: number = 120.6053346;
  public zoom: number = 14;
  //測站資料
  public devices = [];
  public deviceDetail :Array<any> = [];
  private tempDevices = this.devices;
  private calcCenterFinish = false;
  private calcAQIFinish = false;
  protected map:any;
  public bounds:LatLngBoundsLiteral = {north:24.1824695,south:24.1824695,east:120.6025716,west:120.6025716};

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
    this._getUserDeviceService.getDevices((res)=> {
      this.devices = _.cloneDeep(res);
    });
  }

  ngDoCheck() {
    if(!_.isEqual(this.devices,this.tempDevices)) {
      this.tempDevices = _.cloneDeep(this.devices);
      this.loading = true;
      this.getLassDeviceDetail();
    }
  }

  protected mapReady(map) {
    this.map = map;
    this.map.fitBounds(this.bounds);
  }

  public markerClicked(markerObj){
    if (this.map) {
      this.map.setCenter({lat: markerObj[0], lng: markerObj[1]});
    }
  }

  private getLassDeviceDetail(){
    this.deviceDetail.length = 0;
    this.devices.forEach((value,index,array)=>{
      this._getLassDeviceService.getLassDeviceById(value,(res)=>{
        this.deviceDetail.push(res);
        if(index==this.devices.length-1){
          this.convertLatLngToNumber();
        }
      });
    });
  }

  //將資料內的數字字串轉為數字格式
  private convertLatLngToNumber(data : Array<any> = this.deviceDetail){
    data.forEach(function(value,index,array){
      //console.log(devices[index].lat);
      data[index].gps_lat = Number(data[index].gps_lat);
      data[index].gps_lon = Number(data[index].gps_lon);
    });

    this.deviceDetail = _.cloneDeep(data);
    this.tempDevices = _.cloneDeep(this.devices);
    this.calcCenter();
    this.calcAQI();
  }

  //計算中心並調整縮放比例
  private calcCenter(){
    let latMin:number;
    let latMax:number;
    let lngMin:number;
    let lngMax:number;
    this.deviceDetail.forEach((value,index,array)=>{
      latMin = (latMin<value.gps_lat)?latMin:value.gps_lat;
      latMax = (latMax>value.gps_lat)?latMax:value.gps_lat;
      lngMin = (lngMin<value.gps_lon)?lngMin:value.gps_lon;
      lngMax = (lngMax>value.gps_lon)?lngMax:value.gps_lon;
    });
    this.bounds.south = latMax+0.005;
    this.bounds.west = lngMin-0.002;
    this.bounds.north = latMin-0.005;
    this.bounds.east = lngMax+0.002;
    this.calcCenterFinish = true;
    this.loading = !(this.calcAQIFinish && this.calcCenterFinish);
  }

  private calcAQI(){
    if(this.deviceDetail!==undefined) {
      this.deviceDetail.forEach((value, index, array)=> {
        //noinspection TypeScriptUnresolvedVariable
        let AQI = this._calcAQI.calc(value.pm25, value.pm10);

        if (AQI > 0 && AQI <= 6) {
          this.deviceDetail[index].icon = this.icon[AQI - 1];
        } else {
          //noinspection TypeScriptUnresolvedVariable
          console.log(`Calc AQI Level Error. PM2.5: ${value.pm25}, PM10: ${value.pm10}`);
        }
      });

      this.calcAQIFinish = true;
      this.loading = !(this.calcAQIFinish && this.calcCenterFinish);
    }
  }
}

