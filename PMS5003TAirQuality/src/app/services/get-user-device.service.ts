import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Cookie } from 'ng2-cookies';
import { GetSingleDataService } from "./get-single-data.service";
import { GetSingleLASSDataService } from "./get-single-lassdata.service";
import { GetLassDeviceService } from "./get-lassdevice.service";
//noinspection TypeScriptCheckImport
import * as _ from "lodash";

@Injectable()
export class GetUserDeviceService {
  constructor(private http:HttpClient,
              private _getLassDeviceService:GetLassDeviceService) {}

  //資料
  public data:any[] = [];
  //php位置
  private dbURL = "assets/php/getUserDevices";
  private devices:String[];
  private displayNearest:Boolean;
  //獲取登入資料
  public getUserDevicesHttpWithPromise(){
    let params:any = new HttpParams();

    params = params.set('_e', Cookie.get('_e'));
    params = params.set('_p', Cookie.get('_p'));
    //noinspection TypeScriptUnresolvedFunction
    return this.http.post(this.dbURL,params,{
      observe: 'body',
      reportProgress:true,
      responseType: 'json'
    }).toPromise().then((dataIn:any[])=> {
      //成功取得資料
      this.data = [];
      Cookie.set('displayNearest',dataIn[0]);
      dataIn.forEach((value)=>{
        //noinspection TypeScriptUnresolvedVariable
        if(typeof value.device_id!=='undefined'){
          //noinspection TypeScriptUnresolvedVariable
          if(value.nickname==null || typeof value.nickname==='undefined'){
            value.nickname = "";
          }
          this.data.push([value.device_id,value.type,value.nickname]);
        }
      });
      return Promise.resolve(this.data);
    }).catch((err)=> {
      //失敗取得資料
      console.warn("Warn: Cannot get user devices.");
      return Promise.resolve(this.data);
    });
  }

  public getDevices(nearestAmount:number, callback?:Function){
    //nearestAmount = 1;
    if(Cookie.check("_p")){
      //已登入
      this.getUserDevicesHttpWithPromise().then((res:any[])=>{
        this.devices = res;
        this._getLassDeviceService.setLASSDeviceList(nearestAmount,(res:any[])=>{
          Cookie.set('devices',JSON.stringify(this.devices.concat(res)));
          (callback && typeof(callback) === "function") && callback(this.devices.concat(res));
        });
      });
    }else {
      //未登入
      this._getLassDeviceService.setLASSDeviceList(nearestAmount,(res)=>{
        this.devices = res;
        Cookie.set('devices',JSON.stringify(this.devices));
        (callback && typeof(callback) === "function") && callback(this.devices);
      });
    }
  }
}
