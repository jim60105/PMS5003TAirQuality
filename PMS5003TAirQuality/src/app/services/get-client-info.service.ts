import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import '../../../node_modules/rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

import { CLIENTINFO } from 'assets/mock-clientInfo';

@Injectable()
export class GetClientInfoService {
  constructor(private http:Http) {
    this.getClientDataHttpWithPromise();
  }

  //資料
  public clientInfo:Array<any>;
  //php位置
  private dbURL = "assets/php/getClientInfo.php";

  //獲取終端資料
  public getClientDataHttpWithPromise(){
    //noinspection TypeScriptUnresolvedFunction
    return this.http.get(this.dbURL).toPromise().then((res:Response) => {
      let body = res.json();
      return body || {};
    }).then((dataIn)=> {
      //成功取得資料
      this.clientInfo = dataIn;
      return Promise.resolve(this.clientInfo);
    }).catch((err)=> {
      //失敗取得資料
      console.warn("Warn: cannot get client info.");
      this.clientInfo = CLIENTINFO;
      return Promise.resolve(this.clientInfo);
    });
  }
}
