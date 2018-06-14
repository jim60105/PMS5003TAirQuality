import { Component, OnInit, NgZone } from '@angular/core';

import { GetDeviceService } from "../../services/get-device.service";
import { GetLassDeviceService } from "../../services/get-lassdevice.service";
import { GetUserDeviceService } from "../../services/get-user-device.service";
import { SetUserDeviceService } from "../../services/set-user-device.service";
import { SetUserSettingsService } from "../../services/set-user-settings.service";
import { LoginService } from "../../services/login.service";

import { Cookie } from 'ng2-cookies';
//noinspection TypeScriptCheckImport
import * as _ from "lodash";
import {URLSearchParams} from "@angular/http";
import {DaterangepickerComponent} from "../../daterangepicker.component";
@Component({
  selector: 'app-setting-page',
  templateUrl: './setting-page.component.html',
  styleUrls: ['./setting-page.component.css']
})
export class SettingPageComponent {

  constructor(public _getDeviceService:GetDeviceService,
              public _getLassDeviceService:GetLassDeviceService,
              public _getUserDeviceService:GetUserDeviceService,
              public _setUserDeviceService:SetUserDeviceService,
              public _setUserSettingsService:SetUserSettingsService,
              private _loginService: LoginService,
              private zone:NgZone) { }

  public LASSDeviceList = this._getLassDeviceService.LASSDeviceList;
  public deviceList = [];
  public userDevices:Array<String[]> = [];
  public userDevicesTemp:Array<String[]> = [];
  public displayNearest = true;
  public loading = false;
  public iftttKey = '';
  public iftttDevices:Array<any[]> = [];
  public iftttDevicesTemp:Array<String[]> = [];
  public AQIString = ['良好','普通','對敏感族群不健康','對所有族群不健康','非常不健康','危害'];

  public _p = "";
  public _p2 = "";
  ngOnInit() {
    this.loading = true;
    if(!Cookie.check("_p")) {
      document.location.hash="#";
    }else {
      //已登入

      this._getDeviceService.getDeviceHttpWithPromise().then((res) => {
        res.sort(this.compareDevice_id);
        this.deviceList = res;
      });

      this._getLassDeviceService.getLassDeviceWithPromise().then((res) => {
        res.sort(this.compareDevice_id);
        this.LASSDeviceList = res;
      });

      this.userDevices = [];
      this._getUserDeviceService.getUserDevicesHttpWithPromise().then((res) => {
        this.displayNearest = (Cookie.get('displayNearest') == '1');
        this.userDevices = res;
        this.userDevicesTemp = _.cloneDeep(this.userDevices);
        this.loading = false;
      });
      this.iftttKey = Cookie.get('iftttKey');
      this.iftttDevices.length = 0;
      let iftttDeviceFromCookie:Array<any> = JSON.parse(Cookie.get('iftttDevice'));
      iftttDeviceFromCookie.forEach((value,index,array)=>{
        this.iftttDevices.push([value['device_id'],value['type'],value['air_type'],value['monitor_value']]);
      });
      this.iftttDevicesTemp = _.cloneDeep(this.iftttDevices);
    }
  }

  private compareDevice_id(a,b) {
    if (a.device_id < b.device_id)
      return -1;
    if (a.device_id > b.device_id)
      return 1;
    return 0;
  }

  public deviceChange(i:number,device:String,type:String){
    //noinspection TypeScriptUnresolvedVariable
    this.userDevices[i] = [device,type];
    while(_.findIndex(this.userDevices,[1,"text"])>=0) {
      this.userDevices.splice(_.findIndex(this.userDevices,[1,"text"]), 1);
    }
  }

  public addUserDevice(){
    this.userDevices.push(["請選擇測站","text"]);
  }

  public saveDeviceSettings(){
    this.loading = true;
    //測站設定
    //unique
    this.userDevices = _.uniq(this.userDevices);
    //去掉無效選項
    if(this.userDevices.map(mapObj => mapObj[0]).indexOf('請選擇測站')>=0){
      this.userDevices.splice(this.userDevices.map(mapObj => mapObj[0]).indexOf('請選擇測站'), 1);
    }
    if(this.userDevices.map(mapObj => mapObj[0]).indexOf('THU專題測站')>=0){
      this.userDevices.splice(this.userDevices.map(mapObj => mapObj[0]).indexOf('THU專題測站'), 1);
    }
    if(this.userDevices.map(mapObj => mapObj[0]).indexOf('LASS專案測站')>=0){
      this.userDevices.splice(this.userDevices.map(mapObj => mapObj[0]).indexOf('LASS專案測站'), 1);
    }

    this.userDevicesTemp = _.cloneDeep(this.userDevices);
    //送出
    this._setUserDeviceService.setUserDevicesHttpWithPromise(this.userDevices,this.displayNearest).then((res)=> {
      this.loading = false;
      if (res[0] == 'true') {
        //Success
        console.log('Save user devices successful.');
        alert('儲存設定OK');
        //this.zone.run(()=>{window.location.hash = "#";});
      } else if (res[0] == 'insertError') {
        console.error('User devices insert error.');
      } else if (res[0] == 'loginError') {
        console.error('User login error.');
      }
    });
  }

  public deviceChange2(i:number,device:String,type:String){
    //noinspection TypeScriptUnresolvedVariable
    this.iftttDevices[i][0] = device;
    this.iftttDevices[i][1] = type;
  }
  public deviceChange2_1(i:number,airType:String){
    //noinspection TypeScriptUnresolvedVariable
    this.iftttDevices[i][2] = airType;
  }
  public deviceChange2_2(i:number,AQI:number){
    //noinspection TypeScriptUnresolvedVariable
    this.iftttDevices[i][3] = AQI;
  }

  public addIftttDevice(){
    this.iftttDevices.push(['請選擇測站','text','AQI',6]);
  }

  public saveIFTTTSettings(){
    this.loading = true;

    while(_.findIndex(this.iftttDevices,[1,"text"])>=0) {
      this.iftttDevices.splice(_.findIndex(this.iftttDevices,[1,"text"]), 1);
    }

    this.iftttDevicesTemp = _.cloneDeep(this.iftttDevices);
    this._setUserSettingsService.setIftttKey(this.iftttKey);
    this._setUserSettingsService.setIftttDevice(this.iftttDevices);
    this._setUserSettingsService.setUserSettingsHttpWithPromise().then((res)=>{
      this.loading = false;
      if (res[0] == 'true') {
        //Success
        console.log('Save user devices successful.');
        Cookie.set('iftttKey',this.iftttKey);
        this._loginService.loginHttpWithPromise().then((res)=>{
          if(res[0]['_p']!==undefined) {
            alert('儲存設定OK');
          }else{
            alert('登入逾時，請重新登入!');
          }
          //this.zone.run(()=>{window.location.hash = "#";});
        });
      } else if (res[0] == 'updateError') {
        console.error('User settings update error.');
      } else if (res[0] == 'loginError') {
        console.error('User login error.');
      }
    });
  }

  public reset(){
    this.userDevices = _.cloneDeep(this.userDevicesTemp);
    this.iftttKey = Cookie.get('iftttKey');
    this.iftttDevices = _.cloneDeep(this.iftttDevicesTemp);
  }
}
