import { Component } from '@angular/core';
import { HistoryPageComponent } from '../history-page/history-page.component';
import { GetDeviceService } from "../../services/get-device.service";
import { GetSingleLASSDataService } from "../../services/get-single-lassdata.service";
import { GetLassDeviceService } from "../../services/get-lassdevice.service";
import { GetUserDeviceService } from "../../services/get-user-device.service";

import { CalcAQIComponent } from "../../calc-AQI.component";
import { Cookie } from 'ng2-cookies';
//noinspection TypeScriptCheckImport
import * as _ from "lodash";
import * as moment from 'moment';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  constructor(public _getLASSRealTimeDataService:GetSingleLASSDataService,
              public _getDeviceService:GetDeviceService,
              public _getUserDeviceService:GetUserDeviceService,
              public _getLassDeviceService:GetLassDeviceService) { }

  private _calcAQI = new CalcAQIComponent();
  //資料
  public devices = JSON.parse(Cookie.get('devices'));
  private tempDevices = [];
  private deviceDetail = [];
  //panel的顏色class
  // public panelClass:Array<string> = [];
  public LASSDeviceList = this._getLassDeviceService.LASSDeviceList;
  private tempEmail = Cookie.get("_e");

  //Loading蓋版
  public loading = true;
  ngOnInit() {
    this.loading = true;

    this.tempEmail = Cookie.get("_e");
    this._getUserDeviceService.getDevices(3,(res)=> {
      this.devices = _.cloneDeep(res);
    });
  }

  ngDoCheck() {
    if(!_.isEqual(this.devices,this.tempDevices)) {
      this.tempDevices = _.cloneDeep(this.devices);
      this.loading = true;
      this.getDeviceDetail();
    }

    if(Cookie.get("_e")!=this.tempEmail){
      this.tempEmail = Cookie.get("_e");

      this.loading = true;
      this._getUserDeviceService.getDevices(3,(res)=> {
        this.devices = _.cloneDeep(res);
      });
    }
  }

  private startFlag = false;
  private getDeviceDetail(){
    this.deviceDetail.length = 0;
    let finishFlag = 0;
    if(!this.startFlag) {
      this.startFlag = true;
      this.devices.forEach((value, index, array) => {
        switch (value[1]) {
          case 'LASS':
            this._getLassDeviceService.getLassDeviceById(value[0], (res) => {
              if(typeof res!=="undefined") {
                this.deviceDetail.push(res);
              }
              finishFlag++;
              if (finishFlag == this.devices.length) {
                this.calcAQI(this.deviceDetail);
                this.startFlag = false;
              }
            });
            break;
          case 'THU':
            this._getDeviceService.getDeviceById(value[0], (res) => {
              if(typeof res!=="undefined") {
                this.deviceDetail.push(res);
              }
              finishFlag++;
              if (finishFlag == this.devices.length) {
                this.calcAQI(this.deviceDetail);
                this.startFlag = false;
              }
            });
            break;
        }
      });
    }
  }

  //計算AQI顏色
  private calcAQI(data:Array<any>){
    this._calcAQI.calcAQI(data,(res)=>{
      this.loading = false;
    });
  }
}
