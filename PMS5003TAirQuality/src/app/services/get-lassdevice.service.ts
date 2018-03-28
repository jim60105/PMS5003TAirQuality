import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import '../../../node_modules/rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

import { Cookie } from 'ng2-cookies';
//noinspection TypeScriptCheckImport
import * as _ from "lodash";
@Injectable()
export class GetLassDeviceService {
  constructor(private http:Http) {
  }

  //資料
  public data:Array<any> = [];
  //php位置
  private dbURL = "assets/php/getLASSDevices.php";

  public LASSDeviceList:String[] = [];

  public setLASSDeviceList(list?:String[]){
    this.LASSDeviceList = [];
    if(typeof list!=='undefined'){
      this.LASSDeviceList = list;
      console.log(JSON.stringify(this.LASSDeviceList));
    }

    if(Cookie.get('displayNearest')=='1' || this.LASSDeviceList.length==0){
      this.getGeolocation();
    }
  }

  public getGeolocation(){
    if(Cookie.check('lat') && Cookie.check('lon')){
      this.getNearest3LassDevice();
    }

    if (navigator.geolocation) {
      //let timeoutId = setInterval(() => {
      //  //等待過長時彈跳對話框
      //  if (!confirm("裝置位置取得中\n是否要繼續等待?")){
      //    clearInterval(timeoutId);
      //    timeoutId = 0;
      //    console.warn('Cancel getting location.');
      //    setLocToTHU();
      //    this.getNearest3LassDevice();
      //  }
      //}, 5000);

      navigator.geolocation.getCurrentPosition((position)=>{
        //if(timeoutId) {
        //  clearInterval(timeoutId);
        //  timeoutId = 0;
          Cookie.set('lat', String(position.coords.latitude));
          Cookie.set('lon', String(position.coords.longitude));
          console.log(position.coords.latitude + "," + position.coords.longitude);
          this.getNearest3LassDevice();
        //}
      },(err)=>{
        //if(timeoutId) {
        //  clearInterval(timeoutId);
        //  timeoutId = 0;
          console.warn('ERROR getting location(' + err.code + '): ' + err.message);
          if(!Cookie.check('lat') || !Cookie.check('lon')) {
            setLocToTHU();
          }
          this.getNearest3LassDevice();
        //}
      }, {
        enableHighAccuracy: false,
        maximumAge:60000,
        timeout:Infinity
      });
    } else {
      console.warn("Geolocation is not supported by this browser.");
      if(!Cookie.check('lat') && !Cookie.check('lon')) {
        setLocToTHU();
      }
      this.getNearest3LassDevice();
    }

    function setLocToTHU(){
      console.warn('Set default location to THU.');
      Cookie.set('lat','24.1824695');
      Cookie.set('lon','120.6025716');
      console.log('24.1824695,120.6025716');
    }
  }

  public getNearest3LassDevice(lat:number = Number(Cookie.get("lat")),lon:number = Number(Cookie.get("lon"))){
    Cookie.set("lat",String(lat));
    Cookie.set("lon",String(lon));
    this.getLassDeviceWithPromise().then((res)=>{
      if(res.length>0) {
        //Calc Nearest 3 points
        let nearestIndex:number = 0;
        for (let i = 0; i < res.length; i++) {
          if (res[i].gps_lat < lat) {
            nearestIndex++;
          } else {
            break;
          }
        }

        for (let j = 0; j < 3; j++) {
          let nearestL = res[nearestIndex - 1];
          let nearestR = res[nearestIndex];
          let nearestIndexA = [nearestIndex - 1, nearestIndex];
          for (let i = (nearestIndexA[0] - 1); i >= 0; i--) {
            if (Math.abs(lon - res[i].gps_lon) < Math.abs(lon - nearestL.gps_lon)) {
              if (Math.abs(lat - res[i].gps_lat) + Math.abs(lon - res[i].gps_lon) < Math.abs(lat - nearestL.gps_lat) + Math.abs(lon - nearestL.gps_lon)) {
                nearestL = res[i];
                nearestIndexA[0] = i;
              }
            }
            if (Math.abs(lat - res[i].gps_lat) > Math.abs(lon - nearestL.gps_lon)) {
              break;
            }
          }
          for (let i = (nearestIndexA[1] + 1); i < res.length; i++) {
            if (Math.abs(lon - res[i].gps_lon) < Math.abs(lon - nearestR.gps_lon)) {
              if (Math.abs(lat - res[i].gps_lat) + Math.abs(lon - res[i].gps_lon) < Math.abs(lat - nearestR.gps_lat) + Math.abs(lon - nearestR.gps_lon)) {
                nearestR = res[i];
                nearestIndexA[1] = i;
              }
            }
            if (Math.abs(lat - res[i].gps_lat) > Math.abs(lon - nearestR.gps_lon)) {
              break;
            }
          }
          if (Math.abs(lat - nearestL.gps_lat) + Math.abs(lon - nearestL.gps_lon) < Math.abs(lat - nearestR.gps_lat) + Math.abs(lon - nearestR.gps_lon)) {
            this.LASSDeviceList.push(nearestL.device_id);
            res.splice(nearestIndexA[0], 1);
            nearestIndex--;
            nearestIndexA[1]--;
          } else {
            this.LASSDeviceList.push(nearestR.device_id);
            res.splice(nearestIndexA[1], 1);
          }
        }

        //unique
        this.LASSDeviceList = this.LASSDeviceList.filter( (value, index, self) =>{
          return self.indexOf(value) === index;
        });
        console.log(JSON.stringify(this.LASSDeviceList));
      }else{
        console.error("LASS Devices Empty! Please make sure python script is running.");
        alert('Server Error! Please reload or contact server admin!');
      }
    });
  }

  //獲取LASS測站資料
  public getLassDeviceWithPromise(){
    //noinspection TypeScriptUnresolvedFunction,TypeScriptValidateTypes
    return this.http.get(this.dbURL).toPromise().then((res:Response) => {
      let body = res.json();
      return body || {};
    }).then((dataIn)=> {
      //成功取得資料
      this.data = _.cloneDeep(dataIn);
      return Promise.resolve(dataIn);
    }).catch((err)=> {
      //失敗取得資料
      console.warn("Warn: Cannot get Lass Devices.");
      this.LASSDeviceList = [];
      return Promise.resolve([]);
    });
  }

  public getLassDeviceById(id:String,callback?:Function){
      if(this.data.length==0){
        this.getLassDeviceWithPromise().then((res)=>{
          for (let key in this.data) {
            if (this.data[key]['device_id'] == id) {
              (callback && typeof(callback) === "function") && callback(this.data[key]);
              break;
            }
          }
        });
      }else{
        for (let key in this.data) {
          if (this.data[key]['device_id'] == id) {
            (callback && typeof(callback) === "function") && callback(this.data[key]);
            break;
          }
        }
      }

  }

}
