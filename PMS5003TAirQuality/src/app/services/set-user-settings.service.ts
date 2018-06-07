import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Cookie } from 'ng2-cookies';

@Injectable()
export class SetUserSettingsService {
  constructor(private http:HttpClient) {
  }

  //資料
  public data:Array<any> = [];
  //php位置
  private dbURL = "assets/php/setUserSettings";
  private iftttKey:string = Cookie.get('iftttKey');
  private iftttDevices = [];

  public setIftttKey(key:string){
    this.iftttKey = key;
  }

  public setIftttDevice(devices:Array<any>){
    this.iftttDevices = devices;
  }

  //獲取登入資料
  public setUserSettingsHttpWithPromise(){
    let params:any = new HttpParams();

    params = params.set('_e', Cookie.get('_e'));
    params = params.set('_p', Cookie.get('_p'));
    params = params.set('iftttKey', this.iftttKey);
    params = params.set('iftttDevices',JSON.stringify(this.iftttDevices));

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
