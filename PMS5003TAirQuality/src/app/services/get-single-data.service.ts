import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { realTimeDATA } from '../../assets/mock-singleData';

@Injectable()
export class GetSingleDataService {
  constructor(private http:HttpClient) {
    // this.getSingleDataHttpWithPromise();
    // //重複獲取資料的定時器
    // this.getDataInterval = setInterval(() => {
    //   this.getSingleDataHttpWithPromise();
    // }, 35000);
  }

  //資料
  public data:Array<any> = [];
  //重複獲取資料的定時器
  private getDataInterval: any;
  //php位置
  private dbURL = "assets/php/getDBByTimeSingleData";

  //生命週期結束時清理掉定時器
  ngOnDestroy() {
    clearInterval(this.getDataInterval);
  }

  //獲取終端資料
  public getSingleDataHttpWithPromise(params:any = new HttpParams()){
    //noinspection TypeScriptUnresolvedFunction,TypeScriptValidateTypes
    return this.http.get(this.dbURL, {
      observe: 'body',
      reportProgress:true,
      responseType: 'json',
      params: params
    }).toPromise().then((dataIn:any[])=> {
      //成功取得資料
      this.data.length = 0;
      dataIn.forEach((value,index,array)=>{
        //noinspection TypeScriptUnresolvedVariable
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
