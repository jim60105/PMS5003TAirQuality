import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import '../../../node_modules/rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

import { Cookie } from 'ng2-cookies';

@Injectable()
export class SetUserDeviceService {
  constructor(private http:Http) {
  }

  //資料
  public data:Array<any> = [];
  //php位置
  private dbURL = "assets/php/setUserDevices";

  //獲取登入資料
  public setUserDevicesHttpWithPromise(deviceList:any,displayNearest:Boolean = true){
    let params:any = new URLSearchParams();

    params.set('_e', Cookie.get('_e'));
    params.set('_p', Cookie.get('_p'));
    params.set('device_id',JSON.stringify(deviceList));
    params.set('displayNearest',displayNearest);

    //noinspection TypeScriptUnresolvedFunction
    return this.http.post(this.dbURL,params).toPromise().then((res:Response) => {
      let body = res.json();
      return body || {};
    }).then((dataIn)=> {
      //成功取得資料
      this.data = dataIn;
      return Promise.resolve(this.data);
    }).catch((err)=> {
      //失敗取得資料
      console.warn("Warn: Cannot set user devices. Warn:"+String(err));
      this.data = [];
      return Promise.resolve(this.data);
    });
  }
}
