import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as moment from 'moment';
@Injectable()
export class GetThingspeakDataService {
  constructor(private http:HttpClient) {
  }

  //資料
  public data:Array<any> = [];

  //獲取空汙資料
  public getDataHttpWithPromise(channelID:number, params:any = new HttpParams()){

    //url位置
    let url = `http://api.thingspeak.com/channels/${channelID}/feeds.json`;
    //noinspection TypeScriptUnresolvedFunction,TypeScriptValidateTypes
    return this.http.get(url, {
      observe: 'body',
      reportProgress:true,
      responseType: 'json',
      params: params
    }).toPromise().then((dataIn:any[])=> {
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
