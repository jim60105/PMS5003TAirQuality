import { Component, OnInit, NgZone } from '@angular/core';

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

  constructor(public _getLassDeviceService:GetLassDeviceService,
              public _getUserDeviceService:GetUserDeviceService,
              public _setUserDeviceService:SetUserDeviceService,
              private zone:NgZone) { }

  public LASSDeviceList = this._getLassDeviceService.LASSDeviceList;
  public userDevices:String[] = [];
  public userDevicesTemp:String[] = [];
  private _p:String = '';
  private _p2:String = '';
  private displayNearest = true;

  ngOnInit() {
    if(!Cookie.check("_p")) {
      document.location.hash="#";
    }
    //已登入

    this._getLassDeviceService.getLassDeviceWithPromise().then((res)=>{
      res.sort(this.compareDevice_id);
      this.LASSDeviceList = res;
    });

    this.userDevices = [];
    this._getUserDeviceService.getUserDevicesHttpWithPromise().then((res)=>{
      this.displayNearest = (Cookie.get('displayNearest')=='1');
      this.userDevices = res;
      this.userDevices.push('請選擇測站');
      this.userDevicesTemp = _.cloneDeep(this.userDevices);
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
    //測站設定
    //unique
    this.userDevices = this.userDevices.filter( (value, index, self) =>{
      return self.indexOf(value) === index;
    });
    //去掉'請選擇測站'選項
    this.userDevices.splice(this.userDevices.indexOf('請選擇測站'), 1);

    //送出
    this._setUserDeviceService.setUserDevicesHttpWithPromise(this.userDevices,this.displayNearest).then((res)=> {

      if (res[0] == 'true') {
        //Success
        console.log('Set user device successful.');
        this.zone.run(()=>{window.location.hash = "#";});
      } else if (res[0] == 'insertError') {
        console.error('User devices insert error.');
      } else if (res[0] == 'loginError') {
        console.error('User login error.');
      }
    });



    //TODO 密碼變更

  }

  public deviceChange(i:number,device:String){
    //noinspection TypeScriptUnresolvedVariable
    this.userDevices[i] = device;

    let index = this.userDevices.indexOf('請選擇測站');
    while(index>-1){
      this.userDevices.splice(index,1);
      index = this.userDevices.indexOf('請選擇測站');
    }
    this.userDevices.push('請選擇測站');
  }

  private reset(){
    this.userDevices = _.cloneDeep(this.userDevicesTemp);
  }
}
