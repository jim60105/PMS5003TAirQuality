import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as moment from 'moment';

@Injectable()
export class GetSingleLASSDataService {
  constructor(private http:HttpClient) {
    //重複獲取資料的定時器
    // this.getDataInterval = setInterval(() => {
    //   if(this.isSetParam) {
    //     this.getSingleDataHttpWithPromise();
    //   }
    // }, 61000);
  }

  //資料
  public data:Array<any> = [];
  //重複獲取資料的定時器
  private getDataInterval: any;
  //php位置
  private dbURL = "assets/php/getLASSByTimeByIdSingleData";
  //查詢對象
  public device_idList:String[] = [];
  public time:String = "";
  //是否已設定查詢對象
  public isSetParam = false;
  public isSetTime = false;
  //getParam
  private params:any = new HttpParams();

  //生命週期結束時清理掉定時器
  ngOnDestroy() {
    if(this.isSetParam) {
      clearInterval(this.getDataInterval);
    }
  }

  //設定查詢對象
  public setParam(device:String[] = this.device_idList, time?:String){
    this.data = [];
    this.device_idList = device;
    let device_idJSON = JSON.stringify(device);
    this.params = new HttpParams();
    this.params = this.params.set('device_id', device_idJSON);
    if(typeof time !== 'undefined'){
      this.time = time;
      this.params = this.params.set('time', time);
      this.isSetTime = true;
    }else{
      this.time = "";
      this.isSetTime = false;
    }
    this.isSetParam = true;
  }

  //獲取終端資料
  public getSingleDataHttpWithPromise(){
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
        console.warn("Warn: Cannot get LASS real time data.");
        this.data = [];
        return Promise.resolve(this.data);
      });
    }else{
      console.warn("Please set device_id list before getting data.");
    }
  }
}
