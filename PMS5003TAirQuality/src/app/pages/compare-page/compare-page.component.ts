import { Component } from '@angular/core';

import * as moment from 'moment';
//noinspection TypeScriptCheckImport
import * as _ from "lodash";
import { DaterangepickerComponent } from "../../daterangepicker.component"
import { Daterangepicker, DaterangepickerConfig } from 'ng2-daterangepicker';
import { GetClientInfoService } from "../../services/get-client-info.service";
import { GetDataService } from "../../services/get-data.service";
@Component({
  selector: 'app-compare-page',
  templateUrl: './compare-page.component.html',
  styleUrls: ['./compare-page.component.css']
})
export class ComparePageComponent{

  constructor(private _getClientInfoService:GetClientInfoService,
              private _getDataService:GetDataService,
              private daterangepickerOptions: DaterangepickerConfig) {}

  ngOnInit() {
    this.daterangepickerOptions.settings = new DaterangepickerComponent().options;
    this.daterangepickerOptions.settings.startDate = moment();
    this._getClientInfoService.getClientDataHttpWithPromise().then((res)=>{
      this.clientInfo = res;
    });
    for(let d of this.dateRangepickerComponentArray){
      d.setTimeByDate();
    }
  }

  private unique;
  public readyToGo = false;
  ngDoCheck() {
    //Check Ready
    this.unique = _.uniqBy(this.dateRangepickerComponentArray,
        (e)=>{
          return e.rangeValue[0].toISOString();
        });
    if(this.unique.length == this.dateRangepickerComponentArray.length){
      this.readyToGo = true;
    }else{
      this.readyToGo = false;
    }
  }
  //日期選擇器
  public dateRangepickerComponentArray:DaterangepickerComponent[] = [
    new DaterangepickerComponent(),
    new DaterangepickerComponent()
  ];

  public clientInfo;
  public duration:number = 0;
  public client:number = -1;

  public addDRCA(){
    this.dateRangepickerComponentArray.push(new DaterangepickerComponent());
    this.dateRangepickerComponentArray[this.dateRangepickerComponentArray.length-1].setTimeByDate();
  }
  private selectedDate(value: any,index: number) {
    //日期選擇改變時觸發getDataHttp
    this.dateRangepickerComponentArray[index].setTimeByDate(value.start,value.end);
  }
  private changeDuration(event: any){
    this.duration = event.value;
    for(let d of this.dateRangepickerComponentArray){
      d.setTimeByDate(d.getTimeByDate()[0], moment(d.getTimeByDate()[0]).add(this.duration, 'day').endOf('day').toDate());
    }
  }
}
