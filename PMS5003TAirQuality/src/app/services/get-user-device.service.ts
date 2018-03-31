import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import '../../../node_modules/rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

import { Cookie } from 'ng2-cookies';
import { GetSingleDataService } from "./get-single-data.service";
import { GetSingleLASSDataService } from "./get-single-lassdata.service";
import { GetLassDeviceService } from "./get-lassdevice.service";

@Injectable()
export class GetUserDeviceService {
  constructor(private http:Http,
              private _getLassDeviceService:GetLassDeviceService) {
  }

  //資料
  public data:Array<any> = [];
  //php位置
  private dbURL = "assets/php/getUserDevices.php";
  private devices:String[];
  //獲取登入資料
  public getUserDevicesHttpWithPromise(){
    let params:any = new URLSearchParams();

    params.set('_e', Cookie.get('_e'));
    params.set('_p', Cookie.get('_p'));
    //noinspection TypeScriptUnresolvedFunction
    return this.http.post(this.dbURL,params).toPromise().then((res:Response) => {
      let body = res.json();
      return body || {};
    }).then((dataIn)=> {
      //成功取得資料
      this.data = [];
      dataIn.forEach((value)=>{
        //noinspection TypeScriptUnresolvedVariable
        if(typeof value.device_id==='undefined'){
          //noinspection TypeScriptValidateTypes
          Cookie.set('displayNearest',value);
        }else {
          //noinspection TypeScriptUnresolvedVariable
          this.data.push(value.device_id);
        }
      });
      return Promise.resolve(this.data);
    }).catch((err)=> {
      //失敗取得資料
      console.warn("Warn: Cannot get user devices.");
      return Promise.resolve(this.data);
    });
  }

  public getDevices(callback?:Function){
    if(Cookie.check("_p")){
      //已登入
      this.getUserDevicesHttpWithPromise().then((res)=>{
        this._getLassDeviceService.setLASSDeviceList(res);
      });

    }else {
      //未登入
      this._getLassDeviceService.setLASSDeviceList();
    }
    let interval = setInterval(() => {
      this.devices = this._getLassDeviceService.LASSDeviceList;
      if(this.devices.length!=0) {
        Cookie.set('devices',JSON.stringify(this.devices));
        (callback && typeof(callback) === "function") && callback(this.devices);
        clearTimeout(interval);
      }
    }, 500);
  }
}
