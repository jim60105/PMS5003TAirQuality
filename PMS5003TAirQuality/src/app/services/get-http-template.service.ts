import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import '../../../node_modules/rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import {PromiseType} from "protractor/built/plugins";

@Injectable()
export class GetHttpTemplateService {
  constructor(public http:Http) {
  }

  //資料
  public data:Array<any> = [];
  //url位置
  public url = "";
  public useProxy = false;
  //是否已設定查詢對象
  public isSetParam = false;
  //getParam
  public params:any = new URLSearchParams();

  //設定查詢對象
  public setParam(){};

  public afterRequestSuccess(dataIn:any){
    this.data = dataIn;
    return dataIn;
  };

  public createProxy(url:string=this.url){
    this.url = "assets/php/proxy.php?url="+encodeURIComponent(url);
  }

  //獲取空汙資料
  public getHttpWithPromise(){
    if(this.useProxy){
      this.createProxy(this.url);
    }
    if(this.isSetParam) {
      //noinspection TypeScriptUnresolvedFunction,TypeScriptValidateTypes
      return this.http.get(this.url, {search: this.params}).toPromise().then((res:Response) => {
        let body = res.json();
        return body || {};
      }).then(
        this.afterRequestSuccess
      ).catch((err)=> {
        //失敗取得資料
        console.warn("Warn: Http request failed. ERR: " + err.toString());
        this.data = [];
        return Promise.resolve(this.data);
      });
    }else{
      console.warn("Please set param.");
    }
  }
}
