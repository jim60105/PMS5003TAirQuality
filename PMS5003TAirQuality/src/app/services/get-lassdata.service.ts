import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import '../../../node_modules/rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

import * as moment from 'moment';
@Injectable()
export class GetLASSDataService {
  constructor(private http:Http) {
  }

  //資料
  public data:Array<any> = [];
  //php位置
  private dbURL = "assets/php/getLASSByTimeById.php";
  //查詢參數
  public device_idList:String[] = [];
  public minDate:String = "";
  public maxDate:String = moment().endOf('day').format('YYYY-MM-DD HH:mm:ss');
  //是否已設定查詢對象
  public isSetParam = false;
  //getParam
  private params:any = new URLSearchParams();

  //設定查詢對象
  public setParam(device:String[] = this.device_idList,minDate:String = this.minDate,maxDate:String = this.maxDate){
    this.data = [];
    this.params = new URLSearchParams();
    this.device_idList = device;
    this.params.set('device_id', JSON.stringify(device));
    this.minDate = minDate;
    this.params.set('minDate', minDate);
    this.maxDate = maxDate;
    this.params.set('maxDate', maxDate);
    this.isSetParam = true;
  }

  //獲取空汙資料
  public getDataHttpWithPromise(){
    if(this.isSetParam) {
      //noinspection TypeScriptUnresolvedFunction,TypeScriptValidateTypes
      return this.http.get(this.dbURL, {search: this.params}).toPromise().then((res:Response) => {
        let body = res.json();
        return body || {};
      }).then((dataIn)=> {
        //成功取得資料
        this.data = dataIn;
        //轉換UTC時間為本地時間
        dataIn.forEach((value,index,array)=>{
          //noinspection TypeScriptUnresolvedVariable
          let tt = moment.utc(value.time);
          //noinspection TypeScriptUnresolvedVariable
          value.time = tt.local().format('YYYY-MM-DD HH:mm:ss');
        });
        return Promise.resolve(this.data);
      }).catch((err)=> {
        //失敗取得資料
        console.warn("Warn: Cannot get lassData.");
        this.data = [];
        return Promise.resolve(this.data);
      });
    }else{
      console.warn("Please set device_id, minDate, maxDate before getting data.");
    }
  }
}
