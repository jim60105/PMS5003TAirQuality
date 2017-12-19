import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import '../../../node_modules/rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { Cookie } from 'ng2-cookies';

import * as moment from 'moment';
@Injectable()
export class GetThingspeakDataService {
  constructor(private http:Http) {
  }

  //資料
  public data:Array<any> = [];

  //獲取空汙資料
  public getDataHttpWithPromise(channelID:number, params:any = new URLSearchParams()){

    //url位置
    let url = `http://api.thingspeak.com/channels/${channelID}/feeds.json`;
    //noinspection TypeScriptUnresolvedFunction,TypeScriptValidateTypes
    return this.http.get(url, {search: params}).toPromise().then((res:Response) => {
      let body = res.json();
      return body || {};
    }).then((dataIn)=> {
      //成功取得資料
      this.data = dataIn;
      return Promise.resolve(this.data);
    }).catch((err)=> {
      //失敗取得資料
      console.warn("Warn: Cannot get ThingSpeakData.");
      //this.data = DATA;  //Use mock data
      return Promise.resolve(this.data);
    });
  }
}
