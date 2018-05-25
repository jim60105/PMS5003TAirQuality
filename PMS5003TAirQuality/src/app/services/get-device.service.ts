import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import '../../../node_modules/rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

import { DEVICE } from '../../assets/mock-device';

//noinspection TypeScriptCheckImport
import * as _ from "lodash";
@Injectable()
export class GetDeviceService {
  constructor(private http:Http) {
    this.getDeviceHttpWithPromise().then((res)=>{
      this.data = res;
    });
  }

  //資料
  public data:Array<any>;
  //php位置
  private dbURL = "assets/php/getDBDevice";

  //獲取測站資料
  public getDeviceHttpWithPromise(){
    //noinspection TypeScriptUnresolvedFunction,TypeScriptValidateTypes
    return this.http.get(this.dbURL).toPromise().then((res:Response) => {
      let body = res.json();
      return body || {};
    }).then((dataIn)=> {
      //成功取得資料
      ////轉換UTC時間為本地時間
      //dataIn.forEach((value,index,array)=>{
      //  //noinspection TypeScriptUnresolvedVariable
      //  let tt = moment.utc(value.time);
      //  //noinspection TypeScriptUnresolvedVariable
      //  array[index].time = tt.local().format('YYYY-MM-DD HH:mm:ss');
      //});

      this.data = _.cloneDeep(dataIn);
      return Promise.resolve(dataIn);
    }).catch((err)=> {
      //失敗取得資料
      console.warn("Warn: cannot get air devices.");
      this.data = DEVICE;
      return Promise.resolve([]);
    });
  }

  public getDeviceById(id:String, callback?:Function){
    if(this.data.length==0){
      this.getDeviceHttpWithPromise().then((res)=>{
        for (let key in this.data) {
          if (this.data[key]['device_id'] == id) {
            (callback && typeof(callback) === "function") && callback(this.data[key]);
            break;
          }
        }
      });
    }else{
      for (let key in this.data) {
        if (this.data[key]['device_id'] == id) {
          (callback && typeof(callback) === "function") && callback(this.data[key]);
          break;
        }
      }
    }
  }
}
