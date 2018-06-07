import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class GetHttpTemplateService {
  constructor(public http:HttpClient) {
  }

  //資料
  public data:Array<any> = [];
  //url位置
  public url = "";
  public useProxy = false;
  //是否已設定查詢對象
  public isSetParam = false;
  //getParam
  public params:any = new HttpParams();

  //設定查詢對象
  public setParam(){};

  public afterRequestSuccess(dataIn:any[]){
    this.data = dataIn;
    return Promise.resolve(this.data);
  };

  public createProxy(url:string=this.url){
    return "assets/php/proxy.php?url="+encodeURIComponent(url);
  }

  //獲取空汙資料
  public getHttpWithPromise(){
    if(this.isSetParam) {
      //noinspection TypeScriptUnresolvedFunction,TypeScriptValidateTypes
      return this.http.get((this.useProxy)?this.createProxy():this.url, {
        observe: 'body',
        reportProgress:true,
        responseType: 'json',
        params: this.params
      }).toPromise().then(
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
