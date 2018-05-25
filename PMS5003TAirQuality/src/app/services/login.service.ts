import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import '../../../node_modules/rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class LoginService {
  constructor(private http:Http) {
  }

  //資料
  public data:Array<any> = [];
  //php位置
  private dbURL = "assets/php/login";

  //獲取登入資料
  public loginHttpWithPromise(params:any = new URLSearchParams()){
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
      console.warn("Warn: Cannot login.");
      return Promise.resolve(this.data);
    });
  }
}
