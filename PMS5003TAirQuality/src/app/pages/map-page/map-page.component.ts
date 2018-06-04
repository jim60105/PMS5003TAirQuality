import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LatLngLiteral, LatLngBoundsLiteral, LatLngBounds } from "@agm/core/map-types";
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

//noinspection TypeScriptCheckImport
import * as _ from "lodash";
declare var $:any;
import * as moment from 'moment';

import { GetDeviceService } from "../../services/get-device.service";

import { CalcAQIComponent } from "../../calc-AQI.component";
import { GetLassDeviceService } from "../../services/get-lassdevice.service";
import { GetUserDeviceService } from "../../services/get-user-device.service";
import { GetHttpEdimaxService } from "../../services/get-http-edimax.service";
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
              private _getDeviceService:GetDeviceService,
              private _getLassDeviceService:GetLassDeviceService,
              private _getUserDeviceService:GetUserDeviceService,
              private _getHttpEdimaxService:GetHttpEdimaxService) {}

  private _calcAQI = new CalcAQIComponent();
  //測站資料
  public devices = [];
  public deviceDetail :Array<any> = [];
  public allDevicesDetails :Array<any> = [];
  private tempDevices = this.devices;
  private calcCenterFinish = false;
  private calcAQIFinish = false;
  protected map:any;
  public bounds:LatLngBoundsLiteral = {north:24.1824695,south:24.1824695,east:120.6025716,west:120.6025716};
  //panel的顏色class
  public AQI:Array<string> = ["disabled","AQI1","AQI2","AQI3 a-ring","AQI4 a-ring","AQI5 a-ring","AQI6 a-ring"];
  //AQIIconUrl
  private icon:string[] = [
    "assets/pic/AQI0.png",
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

    //取得所有測站點
    this.allDevicesDetails = [];
    let lassReady = false;
    let THUReady = false;
    let edimaxReady = false;
    //LASS
    this._getLassDeviceService.getLassDeviceWithPromise().then((res)=>{
      res.forEach((value:any,index,array)=>{
        value.type = 'LASS';
        value.name = '[LASS]' + value.device_id;
      });
      this.allDevicesDetails = this.allDevicesDetails.concat(res);
      lassReady = true;
      if(lassReady && THUReady && edimaxReady) {
        this.convertLatLngToNumber(this.allDevicesDetails, ()=> {
          this.calcAQI(this.allDevicesDetails);
        });
      }
    });
    //THU
    this._getDeviceService.getDeviceHttpWithPromise().then((res)=>{
      res.forEach((value:any,index,array)=>{
        value.type = 'THU';
        value.name = '[THU]' + value.device_id;
      });
      this.allDevicesDetails = this.allDevicesDetails.concat(res);
      THUReady = true;
      if(lassReady && THUReady && edimaxReady) {
        this.convertLatLngToNumber(this.allDevicesDetails, ()=> {
          this.calcAQI(this.allDevicesDetails);
        });
      }
    });

    //Edimax
    this._getHttpEdimaxService.getHttpWithPromise().then((res:Array<any>)=>{
      this.allDevicesDetails = this.allDevicesDetails.concat(res);
      edimaxReady = true;
      if(lassReady && THUReady && edimaxReady) {
        this.convertLatLngToNumber(this.allDevicesDetails, ()=> {
          this.calcAQI(this.allDevicesDetails);
        });
      }
    });
  }

  ngDoCheck() {
    if(!_.isEqual(this.devices,this.tempDevices)) {
      this.tempDevices = _.cloneDeep(this.devices);
      this.loading = true;
      this.mapDisplay = false;
      this.calcCenterFinish = false;
      this.calcAQIFinish = false;
      // this.allDevicesDetails.forEach((value,index,array)=>{
      //   if(this.devices.map(mapObj => mapObj[0]).indexOf(value.device_id)>=0){
      //     //noinspection TypeScriptUnresolvedVariable
      //     value.open = true;
      //   }else{
      //     //noinspection TypeScriptUnresolvedVariable
      //     value.open = false;
      //   }
      // });
      this.getDeviceDetail();
    }

    if(Cookie.get("_e")!=this.tempEmail){
      this.tempEmail = Cookie.get("_e");

      this.loading = true;
      this._getUserDeviceService.getDevices(1,(res)=> {
        this.devices = _.cloneDeep(res);
      });
    }
  }

  private startFlag = false;
  private getDeviceDetail(){
    this.deviceDetail.length = 0;
    let finishFlag = 0;
    if(!this.startFlag) {
      this.startFlag = true;
      this.devices.forEach((value, index, array) => {
        switch (value[1]) {
          case 'LASS':
            this._getLassDeviceService.getLassDeviceById(value[0], (res) => {
              if (typeof res !== "undefined") {
                this.deviceDetail.push(res);
              }
              finishFlag++;
              if (finishFlag == this.devices.length) {
                this.convertLatLngToNumber(this.deviceDetail, () => {
                  this.calcCenter();
                  this.calcAQI(this.deviceDetail);
                  this.startFlag = false;
                });
              }
            });
            break;
          case 'THU':
            this._getDeviceService.getDeviceById(value[0], (res) => {
              if (typeof res !== "undefined") {
                this.deviceDetail.push(res);
              }
              finishFlag++;
              if (finishFlag == this.devices.length) {
                this.convertLatLngToNumber(this.deviceDetail, () => {
                  this.calcCenter();
                  this.calcAQI(this.deviceDetail);
                  this.startFlag = false;
                });
              }
            });
            break;
          case 'Edimax':
            this.allDevicesDetails.forEach((v,index,array)=>{
              if(v['device_id']==value[0]){
                this.deviceDetail.push(v);
              }
            });
            finishFlag++;
            if (finishFlag == this.devices.length) {
              this.convertLatLngToNumber(this.deviceDetail, () => {
                this.calcCenter();
                this.calcAQI(this.deviceDetail);
                this.startFlag = false;
              });
            }
            break;
        }
      });
    }
  }

  protected mapReady(map) {
    this.map = map;
    this.map.fitBounds(this.bounds);
  }

  public markerClicked(markerObj){
    if (this.map) {
      //this.map.setCenter({lat: markerObj[1], lng: markerObj[2]});
      this.devices = [];
      this.devices.unshift([markerObj[0],markerObj[3]]);
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
    if(this.deviceDetail.length==0){
      latMin = latMax = lngMax = lngMin = 0;
    }else {
      this.deviceDetail.forEach((value, index, array) => {
        latMin = (latMin < value.gps_lat) ? latMin : value.gps_lat;
        latMax = (latMax > value.gps_lat) ? latMax : value.gps_lat;
        lngMin = (lngMin < value.gps_lon) ? lngMin : value.gps_lon;
        lngMax = (lngMax > value.gps_lon) ? lngMax : value.gps_lon;
      });
    }
    this.bounds.south = latMax+0.005;
    this.bounds.west = lngMin-0.002;
    this.bounds.north = latMin-0.005;
    this.bounds.east = lngMax+0.002;
    // if (this.map) {
    //   this.map.fitBounds(this.bounds);
    // }
    this.calcCenterFinish = true;
    this.mapDisplay = (this.calcAQIFinish && this.calcCenterFinish);
    this.loading = !this.mapDisplay;
  }

  private calcAQI(data:Array<any>){
    this._calcAQI.calcAQI(data,(res)=>{
      res.forEach((value,index,array)=>{
        value.icon = `assets/pic/AQI${value.AQI}.png`;
      });

      this.calcAQIFinish = true;
      this.mapDisplay = (this.calcAQIFinish && this.calcCenterFinish);
      this.loading = !this.mapDisplay;
    });
  }
}

