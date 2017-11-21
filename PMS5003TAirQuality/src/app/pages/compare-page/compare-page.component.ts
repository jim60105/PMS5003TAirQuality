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

  public _DaterangepickerComponent = new DaterangepickerComponent();
  private unique;
  public ready = false;
  private overBound = false;
  public errDate:boolean[] = [true,true];
  public clientInfo;
  public duration:number = 6;
  public client:number = -1;
  //日期選擇器
  public dateRangepickerComponentArray:DaterangepickerComponent[] = [
      new DaterangepickerComponent(moment().subtract(this.duration,'day').startOf('day'),moment()),
      new DaterangepickerComponent(moment().subtract(this.duration,'day').startOf('day'),moment())
  ];

  ngOnInit() {
    this.daterangepickerOptions.settings = this.dateRangepickerComponentArray[0].settings;
    this.daterangepickerOptions.settings.startDate = moment().subtract(this.duration,'day');
    this.daterangepickerOptions.settings.maxDate = moment().subtract(this.duration,'day');
    this.daterangepickerOptions.settings.singleDatePicker = true;

    this._getClientInfoService.getClientDataHttpWithPromise().then((res)=>{
      this.clientInfo = res;
    });
  }


  public addDateRangepickerComponentArray(){
    this.errDate.push(true);
    this.dateRangepickerComponentArray.push(new DaterangepickerComponent(moment().subtract(this.duration,'day').startOf('day'),moment()));
    this.checkReady();
  }
  private selectedDate(value: any, dateInput: any,index: number) {
    //日期選擇改變時觸發getDataHttp
    this.dateRangepickerComponentArray[index].setTimeByDate(value.start,moment(value.start).add(this.duration,'day').toDate());
    dateInput = this.dateRangepickerComponentArray[index];
    this.checkReady();
  }
  private changeDuration(event: any){
    this.duration = event.value-1;
    for(let d of this.dateRangepickerComponentArray){
      d.setTimeByDate(d.getTimeByDate()[0], moment(d.getTimeByDate()[0]).add(this.duration, 'day').endOf('day').toDate());
    }

    this.daterangepickerOptions.settings.startDate = moment().subtract(this.duration,'day');
    this.daterangepickerOptions.settings.maxDate = moment().subtract(this.duration,'day');
    this.checkReady();
  }
  private checkReady(){
    this.overBound = false;
    this.errDate = [];
    this.unique = _.uniqBy(this.dateRangepickerComponentArray,
        (e)=>{
          if(e.rangeValue[0]>=this.daterangepickerOptions.settings.maxDate && !e.rangeValue[0]<=this.daterangepickerOptions.settings.minDate) {
            this.overBound = true;
            this.errDate.push(false);
          }else{
            this.errDate.push(true);
          }
          return e.rangeValue[0].toISOString();
        });
    if(this.unique.length>1  && !this.overBound){
      this.ready = true;
    }else{
      this.ready = false;
    }
  }

  private submit(){
    console.log(this.unique);
  }
}
