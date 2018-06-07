import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Cookie } from 'ng2-cookies';

@Injectable()
export class SetUserDeviceService {
  constructor(private http:HttpClient) {
  }

  //資料
  public data:Array<any> = [];
  //php位置
  private dbURL = "assets/php/setUserDevices";

  //獲取登入資料
  public setUserDevicesHttpWithPromise(deviceList:any,displayNearest:Boolean = true){
    let params:any = new HttpParams();

    params = params.set('_e', Cookie.get('_e'));
    params = params.set('_p', Cookie.get('_p'));
    params = params.set('device_id',JSON.stringify(deviceList));
    params = params.set('displayNearest',displayNearest);

    //noinspection TypeScriptUnresolvedFunction
    return this.http.post(this.dbURL,params,{
      observe: 'body',
      reportProgress:true,
      responseType: 'json'
    }).toPromise().then((dataIn:any[])=> {
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
