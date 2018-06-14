import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { DEVICE } from '../../assets/mock-device';

//noinspection TypeScriptCheckImport
import * as _ from "lodash";
import * as moment from 'moment';
import {GetUserDeviceService} from "./get-user-device.service";
@Injectable()
export class GetDeviceService {
  constructor(private http:HttpClient,
              private _getUserDeviceService:GetUserDeviceService) {
  }

  //資料
  public data:Array<any>;
  private getDataFinish = false;
  //php位置
  private dbURL = "assets/php/getDBDevice";
  private userDevice = [];
  private getUserDeviceFinish = false;
  //獲取測站資料
  public getDeviceHttpWithPromise(){
    //noinspection TypeScriptUnresolvedFunction,TypeScriptValidateTypes
    return this.http.get(this.dbURL, {
      observe: 'body',
      reportProgress: true,
      responseType: 'json'
    }).toPromise().then((dataIn:any[])=> {
      //成功取得資料
      ////轉換UTC時間為本地時間
      dataIn.forEach((value,index,array)=>{
       //noinspection TypeScriptUnresolvedVariable
       let tt = moment.utc(value.time);
       //noinspection TypeScriptUnresolvedVariable
       array[index].time = tt.local().format('YYYY-MM-DD HH:mm:ss');
      });

      this.data = dataIn;
      this.getDataFinish = true;
      return Promise.resolve(this.data);
    }).catch((err)=> {
      //失敗取得資料
      console.warn("Warn: cannot get air devices.");
      this.data = DEVICE;
      return Promise.resolve([]);
    });
  }

  public getDeviceById(id:String, callback?:Function){
    if(!this.getDataFinish){
      this.getDeviceHttpWithPromise().then(()=>{
        this.getDeviceById(id,callback);
      });
      return;
    }
    if(!this.getUserDeviceFinish){
      this._getUserDeviceService.getDevices(1,(res)=> {
        this.userDevice = _.cloneDeep(res);
        this.getUserDeviceFinish = true;

        this.getDeviceById(id,callback);
      });
      return;
    }
    this.data.some((value,index,array)=>{
      if (value['device_id'] == id) {
        (callback && typeof(callback) === "function") && callback(value);
        return true;
      }
    });
  }
}
