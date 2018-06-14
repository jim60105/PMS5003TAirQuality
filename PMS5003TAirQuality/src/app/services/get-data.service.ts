import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { DATA } from '../../assets/mock-data';
import * as moment from 'moment';
@Injectable()
export class GetDataService {
  constructor(private http:HttpClient) {
  }

  //資料
  public data:Array<any> = [];
  //php位置
  private dbURL = "assets/php/getDBByTimeById";
  //查詢參數
  public device_idList:String[] = [];
  public minDate:String = "";
  public maxDate:String = "";
  //是否已設定查詢對象
  public isSetParam = false;
  //getParam
  private params:any = new HttpParams();

  //設定查詢對象
  public setParam(device:String[] = this.device_idList,minDate:string,maxDate:string){
    this.data = [];
    this.params = new HttpParams();
    this.device_idList = device;
    this.params = this.params.set('device_id', JSON.stringify(device));
    this.minDate = moment(minDate).format('YYYY-MM-DD HH:mm:ss');
    this.params = this.params.set('minDate', this.minDate);
    this.maxDate = moment(maxDate).format('YYYY-MM-DD HH:mm:ss');
    this.params = this.params.set('maxDate', this.maxDate);
    this.isSetParam = true;
  }

  //獲取空汙資料
  public getDataHttpWithPromise(){
    if(this.isSetParam) {
      //noinspection TypeScriptUnresolvedFunction,TypeScriptValidateTypes
      return this.http.get(this.dbURL, {
        observe: 'body',
        reportProgress:true,
        responseType: 'json',
        params: this.params
      }).toPromise().then((dataIn:any[])=> {
        //成功取得資料
        //轉換UTC時間為本地時間
        dataIn.forEach((value,index,array)=>{
         //noinspection TypeScriptUnresolvedVariable
         let tt = moment.utc(value.time);
         //noinspection TypeScriptUnresolvedVariable
         array[index].time = tt.local().format('YYYY-MM-DD HH:mm:ss');
        });
        this.data = dataIn;
        return Promise.resolve(this.data);
      }).catch((err)=> {
        //失敗取得資料
        console.warn("Warn: Cannot get airData.");
        this.data = DATA;
        return Promise.resolve(this.data);
      });
    }else{
      console.warn("Please set device_id, minDate, maxDate before getting air data.");
    }
  }
}
