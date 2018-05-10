import { Component } from '@angular/core';
import { HistoryPageComponent } from '../history-page/history-page.component';
import { GetSingleDataService } from "../../services/get-single-data.service";
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
  constructor(public _getRealTimeDataService:GetSingleDataService,
              public _getLASSRealTimeDataService:GetSingleLASSDataService,
              public _getDeviceService:GetDeviceService,
              public _getUserDeviceService:GetUserDeviceService,
              public _getLassDeviceService:GetLassDeviceService) { }

  private _calcAQI = new CalcAQIComponent();
  //資料
  public devices = JSON.parse(Cookie.get('devices'));
  private tempDevices = [];
  private deviceDetail = [];
  //panel的顏色class
  public panelClass:Array<string> = [];
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
  private getDeviceDetail(){
    this.deviceDetail.length = 0;
    this.devices.forEach((value,index,array)=>{
      switch (value[1]) {
        case 'LASS':
          this._getLassDeviceService.getLassDeviceById(value[0], (res)=> {
            this.deviceDetail.push(res);
            if (index == this.devices.length - 1) {
              this.calcAQI();
            }
          });
          break;
        case 'THU':
          this._getDeviceService.getDeviceById(value[0], (res)=>{
            this.deviceDetail.push(res);
            if (index == this.devices.length - 1) {
              this.calcAQI();
            }
          });
          break;
      }
    });
  }

  //計算AQI顏色
  private calcAQI(){
    this.loading = true;
    if(this.deviceDetail[0]!==undefined){
      this.panelClass.length = 0;
      this.deviceDetail.forEach((value,index,array)=>{
        //noinspection TypeScriptValidateTypes
        if((moment().valueOf()-moment(value.time).valueOf())>3600000){
          this.panelClass[index] = "disabled";
        }else {
          let AQI = this._calcAQI.calc(value.pm25, value.pm10);

          if (AQI != 0) {
            if (AQI >= 3) {
              //震動特效
              this.panelClass[index] = `AQI${AQI} a-ring`;
            } else {
              this.panelClass[index] = "AQI" + AQI;
            }
            switch (AQI) {
              case 1:
                array[index].airQuality = "良好";
                break;
              case 2:
                array[index].airQuality = "普通";
                break;
              case 3:
                array[index].airQuality = "對敏感族群不健康";
                break;
              case 4:
                array[index].airQuality = "對所有族群不健康";
                break;
              case 5:
                array[index].airQuality = "非常不健康";
                break;
              case 6:
                array[index].airQuality = "危害";
                break;
            }
          } else {
            console.log(`Calc AQI Level Error. PM2.5: ${value.pm25}, PM10: ${value.pm10}`);
          }
        }
      });
    }
    this.loading = false;
  }

}
