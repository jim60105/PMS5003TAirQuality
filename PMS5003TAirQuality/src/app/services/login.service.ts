import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import '../../../node_modules/rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import {Cookie} from "ng2-cookies";


@Injectable()
export class LoginService {
  constructor(private http:Http) {
  }

  //資料
  public data:Array<any> = [];
  //php位置
  private dbURL = "assets/php/login";
  private params = new URLSearchParams();
  public setParam(_e:string,_p:string){
    this.params.set('_e', _e);
    this.params.set('_p', _p);
  }

  //獲取登入資料
  public loginHttpWithPromise(){
    //noinspection TypeScriptUnresolvedFunction
    return this.http.post(this.dbURL,this.params).toPromise().then((res:Response) => {
      let body = res.json();
      return body || {};
    }).then((dataIn:any)=> {
      //成功取得資料
      this.data = dataIn;

      //正常登入
      if(dataIn[0]['_p']!==undefined) {
        Cookie.set('_e', dataIn[0]['_e']);
        Cookie.set('_p', dataIn[0]['_p']);
        if(!dataIn[0]['iftttKey']) {
          Cookie.set('iftttKey', '');
        }else{
          Cookie.set('iftttKey', dataIn[0]['iftttKey']);
        }
        if(dataIn[1]!==undefined) {
          Cookie.set('iftttDevice',JSON.stringify(dataIn[1]));
        }
      }

      return Promise.resolve(this.data);
    }).catch((err)=> {
      //失敗取得資料
      console.warn("Warn: Cannot login.");
      return Promise.resolve(this.data);
    });
  }
}
