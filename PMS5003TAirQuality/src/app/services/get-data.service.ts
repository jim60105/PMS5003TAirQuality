import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import '../../../node_modules/rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

import { DATA } from '../../assets/mock-data';

@Injectable()
export class GetDataService {
  constructor(private http:Http) {
    this.getDataHttpWithPromise();
  }

  //資料
  public data:Array<any> = [];
  //php位置
  private dbURL = "assets/php/getDBByTime.php";

  //獲取空汙資料
  public getDataHttpWithPromise(params:any = new URLSearchParams()){
    //noinspection TypeScriptUnresolvedFunction,TypeScriptValidateTypes
    return this.http.get(this.dbURL, {search: params}).toPromise().then((res:Response) => {
      let body = res.json();
      return body || {};
    }).then((dataIn)=> {
      //成功取得資料
      this.data = dataIn;
      return Promise.resolve(this.data);
    }).catch((err)=> {
      //失敗取得資料
      console.warn("Warn: Cannot get airData.");
      this.data = DATA;  //Use mock data
      return Promise.resolve(this.data);
    });
  }
}
