import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Cookie} from "ng2-cookies";
@Injectable()
export class LoginService {
  constructor(private http:HttpClient) {
  }

  //資料
  public data:Array<any> = [];
  //php位置
  private dbURL = "assets/php/login";
  private params = new HttpParams();
  public setParam(_e:string,_p:string){
    this.params = this.params.set('_e', _e);
    this.params = this.params.set('_p', _p);
  }

  //獲取登入資料
  public loginHttpWithPromise(){
    //noinspection TypeScriptUnresolvedFunction
    return this.http.post(this.dbURL,this.params,{
      observe: 'body',
      reportProgress:true,
      responseType: 'json'
    }).toPromise().then((dataIn:any[])=> {
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
