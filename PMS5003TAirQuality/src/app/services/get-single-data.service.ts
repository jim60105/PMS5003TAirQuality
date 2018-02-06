import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import '../../../node_modules/rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

import { realTimeDATA } from '../../assets/mock-singleData';

@Injectable()
export class GetSingleDataService {
  constructor(private http:Http) {
    this.getSingleDataHttpWithPromise();
    //重複獲取資料的定時器
    this.getDataInterval = setInterval(() => {
      this.getSingleDataHttpWithPromise();
    }, 35000);
  }

  //資料
  public data:Array<any> = [];
  //重複獲取資料的定時器
  private getDataInterval: any;
  //php位置
  private dbURL = "assets/php/getDBByTimeSingleData.php";

  //生命週期結束時清理掉定時器
  ngOnDestroy() {
    clearInterval(this.getDataInterval);
  }

  //獲取終端資料
  public getSingleDataHttpWithPromise(params:any = new URLSearchParams()){
    //noinspection TypeScriptUnresolvedFunction,TypeScriptValidateTypes
    return this.http.get(this.dbURL, {search: params}).toPromise().then((res:Response) => {
      let body = res.json();
      return body || {};
    }).then((dataIn)=> {
      //成功取得資料
      this.data.length = 0;
      dataIn.forEach((value,index,array)=>{
        this.data[value.clientNum] = value;
      });
      return Promise.resolve(this.data);
    }).catch((err)=> {
      //失敗取得資料
      console.warn("Warn: Cannot get real time data.");
      this.data = realTimeDATA;  //Use mock data
      return Promise.resolve(this.data);
    });
  }
}
