import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as moment from 'moment';
@Injectable()
export class GetLASSDataService {
  constructor(private http:HttpClient) {
  }

  //資料
  public data:Array<any> = [];
  //php位置
  private dbURL = "assets/php/getLASSByTimeById";
  //查詢參數
  public device_idList:String[] = [];
  public minDate:string = "";
  public maxDate:string = "";
  //是否已設定查詢對象
  public isSetParam = false;
  //getParam
  private params:HttpParams = new HttpParams();

  //設定查詢對象
  public setParam(device:String[] = this.device_idList,minDate:string,maxDate:string){
    this.data = [];
    this.params = new HttpParams();
    this.device_idList = device;
    this.params = this.params.set('device_id', JSON.stringify(device));
    this.minDate = moment(minDate).utc().format('YYYY-MM-DD HH:mm:ss');
    this.params = this.params.set('minDate', this.minDate);
    this.maxDate = moment(maxDate).utc().format('YYYY-MM-DD HH:mm:ss');
    this.params = this.params.set('maxDate', this.maxDate);
    this.isSetParam = true;
  }

  //獲取空汙資料
  public getDataHttpWithPromise(){
    if(this.isSetParam) {
      //noinspection TypeScriptUnresolvedFunction,TypeScriptValidateTypes
      return this.http.post(this.dbURL,this.params, {
        observe: 'body',
        reportProgress:true,
        responseType: 'json'
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
        console.warn("Warn: Cannot get lassData.");
        this.data = [];
        return Promise.resolve(this.data);
      });
    }else{
      console.warn("Please set device_id, minDate, maxDate before getting data.");
    }
  }
}
