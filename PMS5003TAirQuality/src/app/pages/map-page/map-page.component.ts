import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LatLngLiteral, LatLngBoundsLiteral, LatLngBounds } from "@agm/core/map-types";
import { HttpClient, HttpParams } from '@angular/common/http';

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
  constructor(private http:HttpClient,
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
  private initFinish = false;
  protected map:any;
  public bounds:LatLngBoundsLiteral = {north:24.1824695,south:24.1824695,east:120.6025716,west:120.6025716};
  //panel的顏色class
  public AQI:Array<string> = ["disabled","AQI1","AQI2","AQI3 a-ring","AQI4 a-ring","AQI5 a-ring","AQI6 a-ring"];
  private tempEmail = Cookie.get("_e");
  public mapDisplay = false;

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
        // value.name = '[LASS]' + value.device_id;
      });
      this.allDevicesDetails = this.allDevicesDetails.concat(res);
      lassReady = true;
      if(lassReady && THUReady && edimaxReady) {
        this.finish(this.allDevicesDetails);
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
        this.finish(this.allDevicesDetails);
      }
    });

    //Edimax
    this._getHttpEdimaxService.getHttpWithPromise().then((res:Array<any>)=>{
      this.allDevicesDetails = this.allDevicesDetails.concat(res);
      edimaxReady = true;
      if(lassReady && THUReady && edimaxReady) {
        this.finish(this.allDevicesDetails);
      }
    });
  }

  private finish(array){
    this.loading = true;
    this.convertLatLngToNumber(array, () => {
      this.calcCenter();
      this.calcAQI(array);
      this.toggleMsgWindowOpen();
      this.startFlag = false;
    });
  }

  ngDoCheck() {
    if(Cookie.get("_e")!=this.tempEmail){
      this.tempEmail = Cookie.get("_e");
      this._getUserDeviceService.getDevices(1,(res)=> {
        this.devices = _.cloneDeep(res);
      });
    }

    if(!_.isEqual(this.devices,this.tempDevices) && this.initFinish) {
      this.tempDevices = _.cloneDeep(this.devices);
      this.loading = true;
      this.mapDisplay = false;
      this.calcCenterFinish = false;
      this.calcAQIFinish = false;
      this.getDeviceDetail();
    }
  }

  private startFlag = false;
  private getDeviceDetail(){
    if(!this.startFlag) {
      this.startFlag = true;
      this.deviceDetail.length = 0;
      let finishFlag = 0;
      this.devices.forEach((value, index, array) => {
        switch (value[1]) {
          case 'LASS':
            this._getLassDeviceService.getLassDeviceById(value[0], (res) => {
              if (typeof res !== "undefined") {
                value[2] = (typeof value[2]==="undefined")?"":value[2];

                this.tempDevices = _.cloneDeep(this.devices);
                res.device_id = (value[2]!=="")?value[2]:res.device_id;
                res.name = `[LASS]${res.device_id}`;
                this.deviceDetail.push(res);
              }
              finishFlag++;
              if (finishFlag == this.devices.length) {
                this.finish(this.deviceDetail);
              }
            });
            break;
          case 'THU':
            this._getDeviceService.getDeviceById(value[0], (res) => {
              if (typeof res !== "undefined") {
                value[2] = (typeof value[2]==="undefined")?"":value[2];

                this.tempDevices = _.cloneDeep(this.devices);
                res.device_id = (value[2]!=="")?value[2]:res.device_id;
                res.name = `[THU]${res.device_id}`;
                this.deviceDetail.push(res);
              }
              finishFlag++;
              if (finishFlag == this.devices.length) {
                this.finish(this.deviceDetail);
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
              this.finish(this.deviceDetail);
            }
            break;
          default:
            finishFlag++;
            console.error('Error type device: ' + value.device_id+', type: '+value.type);
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
    this.bounds.west = lngMin-0.015;
    this.bounds.north = latMin-0.005;
    this.bounds.east = lngMax+0.015;
    // if (this.map) {
    //   this.map.fitBounds(this.bounds);
    // }
    this.calcCenterFinish = true;
    this.mapDisplay = (this.calcAQIFinish && this.calcCenterFinish && this.windowsOpenFinish);
    this.loading = !this.mapDisplay;
  }

  private calcAQI(data:Array<any>){
    this._calcAQI.calcAQI(data,(res)=>{
      res.forEach((value,index,array)=>{
        value.icon = `assets/pic/AQI${value.AQI}.png`;
      });

      this.calcAQIFinish = true;
      this.mapDisplay = (this.calcAQIFinish && this.calcCenterFinish && this.windowsOpenFinish);
      this.loading = !this.mapDisplay;
    });
  }

  private windowsOpenFinish = false;
  private toggleMsgWindowOpen(callback?:Function){
    let device_ids = this.devices.map(mapObj => mapObj[0]);
    let nicknames = this.devices.map(mapObj => mapObj[2]);
    this.allDevicesDetails.forEach((value,index,array)=>{
      if(value.device_id==""){
        value.open = false;
      }else if(device_ids.indexOf(value.device_id)>=0){
        value.open = (value.type == this.devices[device_ids.indexOf(value.device_id)][1]);
      }else if(nicknames.indexOf(value.device_id)>=0) {
        value.open = (value.type == this.devices[nicknames.indexOf(value.device_id)][1]);
      }else{
        //noinspection TypeScriptUnresolvedVariable
        value.open = false;
      }
    });
    (callback && typeof(callback) === "function") && callback();
    this.windowsOpenFinish = true;
    this.initFinish =  this.mapDisplay = (this.calcAQIFinish && this.calcCenterFinish && this.windowsOpenFinish);
    this.loading = !this.mapDisplay;
  }
}

