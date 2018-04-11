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
  //測站資料
  public devices = [];
  public deviceDetail :Array<any> = [];
  public allDevicesDetails :Array<any> = [];
  private tempDevices = this.deviceDetail;
  private calcCenterFinish = false;
  private calcAQIFinish = false;
  protected map:any;
  public bounds:LatLngBoundsLiteral = {north:24.1824695,south:24.1824695,east:120.6025716,west:120.6025716};
  //panel的顏色class
  public AQI:Array<string> = ["AQI1","AQI2","AQI3 a-ring","AQI4 a-ring","AQI5 a-ring","AQI6 a-ring"];
  //AQIIconUrl
  private icon:string[] = [
    "assets/pic/AQI1.png",
    "assets/pic/AQI2.png",
    "assets/pic/AQI3.png",
    "assets/pic/AQI4.png",
    "assets/pic/AQI5.png",
    "assets/pic/AQI6.png"
  ];
  private tempEmail = Cookie.get("_e");
  private mapDisplay = false;

  ngOnInit() {
    this.loading = true;
    this.tempEmail = Cookie.get("_e");
    this._getUserDeviceService.getDevices(1,(res)=> {
      this.devices = _.cloneDeep(res);
    });
    this._getLassDeviceService.getLassDeviceWithPromise().then((res)=>{
      this.allDevicesDetails = _.cloneDeep(res);
      this.convertLatLngToNumber(this.allDevicesDetails,()=>{

        this.calcAQI(this.allDevicesDetails);
      });
    });
  }

  ngDoCheck() {
    if(!_.isEqual(this.devices,this.tempDevices)) {
      this.tempDevices = _.cloneDeep(this.devices);
      this.loading = true;
      this.mapDisplay = false;
      this.calcCenterFinish = false;
      this.calcAQIFinish = false;
      this.allDevicesDetails.forEach((value,index,array)=>{
        if(this.devices.indexOf(value.device_id)>=0){
          //noinspection TypeScriptUnresolvedVariable
          value.open = true;
        }else{
          //noinspection TypeScriptUnresolvedVariable
          value.open = false;
        }
      });
      this.getLassDeviceDetail();
    }

    if(Cookie.get("_e")!=this.tempEmail){
      this.tempEmail = Cookie.get("_e");

      this.loading = true;
      this._getUserDeviceService.getDevices(1,(res)=> {
        this.devices = _.cloneDeep(res);
      });
    }
  }

  private getLassDeviceDetail(){
    this.deviceDetail.length = 0;
    this.devices.forEach((value,index,array)=>{
      this._getLassDeviceService.getLassDeviceById(value,(res)=>{
        this.deviceDetail.push(res);
        if(index==this.devices.length-1){
          this.convertLatLngToNumber(this.deviceDetail,()=>{
            this.calcCenter();
            this.calcAQI(this.deviceDetail);
          });
        }
      });
    });
  }

  protected mapReady(map) {
    this.map = map;
    this.map.fitBounds(this.bounds);
  }

  public markerClicked(markerObj){
    if (this.map) {
      //this.map.setCenter({lat: markerObj[1], lng: markerObj[2]});
      this.devices = [];
      this.devices.unshift(markerObj[0]);
    }
  }

  //將資料內的數字字串轉為數字格式
  private convertLatLngToNumber(data : Array<any>,callback?:Function){
    try {
      data.forEach(function (value, index, array) {
        //console.log(devices[index].lat);
        array[index].gps_lat = Number(value.gps_lat);
        array[index].gps_lon = Number(value.gps_lon);
      });
    }catch(e){
      console.error("Converting error data to numbers.");
    }

    (callback && typeof(callback) === "function") && callback();
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
    this.mapDisplay = !this.loading;
  }

  private calcAQI(data:Array<any>){
    if(data!==undefined) {
      data.forEach((value, index, array)=> {
        //noinspection TypeScriptUnresolvedVariable
        let AQI = this._calcAQI.calc(value.pm25, value.pm10);

        if (AQI > 0 && AQI <= 6) {
          array[index].icon = this.icon[AQI - 1];
          array[index].AQI = this.AQI[AQI - 1];

          switch (AQI){
            case 1:
              array[index].airQuality = "良好";
              break;
            case 2:
              array[index].airQuality = "普通";
              break;
            case 3:
              array[index].airQuality = "對敏感族群不健康 ";
              break;
            case 4:
              array[index].airQuality = "對所有族群不健康 ";
              break;
            case 5:
              array[index].airQuality = "非常不健康";
              break;
            case 6:
              array[index].airQuality = "危害";
              break;
          }
        } else {
          //noinspection TypeScriptUnresolvedVariable
          console.log(`Calc AQI Level Error. PM2.5: ${value.pm25}, PM10: ${value.pm10}`);
        }
      });

      this.calcAQIFinish = true;
      this.loading = !(this.calcAQIFinish && this.calcCenterFinish);
      this.mapDisplay = !this.loading;
    }
  }
}

