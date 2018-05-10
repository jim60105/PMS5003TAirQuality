import { Component, OnInit, NgZone } from '@angular/core';

import { GetDeviceService } from "../../services/get-device.service";
import { GetLassDeviceService } from "../../services/get-lassdevice.service";
import { GetUserDeviceService } from "../../services/get-user-device.service";
import { SetUserDeviceService } from "../../services/set-user-device.service";

import { Cookie } from 'ng2-cookies';
//noinspection TypeScriptCheckImport
import * as _ from "lodash";
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
              private zone:NgZone) { }

  public LASSDeviceList = this._getLassDeviceService.LASSDeviceList;
  public deviceList = [];
  public userDevices:Array<String[]> = [];
  public userDevicesTemp:Array<String[]> = [];
  private _p:String = '';
  private _p2:String = '';
  private displayNearest = true;
  private loading = false;

  ngOnInit() {
    this.loading = true;
    if(!Cookie.check("_p")) {
      document.location.hash="#";
    }
    //已登入

    this._getDeviceService.getDeviceHttpWithPromise().then((res)=>{
      res.sort(this.compareDevice_id);
      this.deviceList = res;
    });

    this._getLassDeviceService.getLassDeviceWithPromise().then((res)=>{
      res.sort(this.compareDevice_id);
      this.LASSDeviceList = res;
    });

    this.userDevices = [];
    this._getUserDeviceService.getUserDevicesHttpWithPromise().then((res)=>{
      this.displayNearest = (Cookie.get('displayNearest')=='1');
      this.userDevices = res;
      this.userDevices.push(["請選擇測站","text"]);
      this.userDevicesTemp = _.cloneDeep(this.userDevices);
      this.loading = false;
    });
  }

  private compareDevice_id(a,b) {
    if (a.device_id < b.device_id)
      return -1;
    if (a.device_id > b.device_id)
      return 1;
    return 0;
  }

  public saveSettings(){
    this.loading = true;
    //測站設定
    //unique
    this.userDevices = _.uniq(this.userDevices);
    //去掉無效選項
    if(this.userDevices.map(mapObj => mapObj[0]).indexOf('請選擇測站')>=0){
      this.userDevices.splice(this.userDevices.map(mapObj => mapObj[0]).indexOf('請選擇測站'), 1);
    }
    let test = this.userDevices.map(mapObj => mapObj[0]).indexOf('THU專題測站');
    if(this.userDevices.map(mapObj => mapObj[0]).indexOf('THU專題測站')>=0){
      this.userDevices.splice(this.userDevices.map(mapObj => mapObj[0]).indexOf('THU專題測站'), 1);
    }
    test = this.userDevices.map(mapObj => mapObj[0]).indexOf('LASS專案測站');
    if(this.userDevices.map(mapObj => mapObj[0]).indexOf('LASS專案測站')>=0){
      this.userDevices.splice(this.userDevices.map(mapObj => mapObj[0]).indexOf('LASS專案測站'), 1);
    }

    //送出
    this._setUserDeviceService.setUserDevicesHttpWithPromise(this.userDevices,this.displayNearest).then((res)=> {
      this.loading = false;
      if (res[0] == 'true') {
        //Success
        console.log('Set user devices successful.');
        this.zone.run(()=>{window.location.hash = "#";});
      } else if (res[0] == 'insertError') {
        console.error('User devices insert error.');
      } else if (res[0] == 'loginError') {
        console.error('User login error.');
      }
    });



    //TODO 密碼變更

  }

  public deviceChange(i:number,device:String,type:String){
    //noinspection TypeScriptUnresolvedVariable
    this.userDevices[i] = [device,type];
    while(_.findIndex(this.userDevices,[1,"text"])>=0) {
      this.userDevices.splice(_.findIndex(this.userDevices,[1,"text"]), 1);
    }
    this.userDevices.push(["請選擇測站","text"]);
  }

  private reset(){
    this.userDevices = _.cloneDeep(this.userDevicesTemp);
  }
}
