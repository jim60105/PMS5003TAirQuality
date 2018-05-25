import { Component } from '@angular/core';
import { URLSearchParams } from '@angular/http';

declare var RColor:any;
import * as moment from 'moment';
//noinspection TypeScriptCheckImport
import * as _ from "lodash";
import { DaterangepickerComponent } from "../../daterangepicker.component"
import { Daterangepicker, DaterangepickerConfig } from 'ng2-daterangepicker';
import { GetDeviceService } from "../../services/get-device.service";
import { GetDataService } from "../../services/get-data.service";
import { GetLassDeviceService } from "../../services/get-lassdevice.service";
import { GetUserDeviceService } from "../../services/get-user-device.service";
import { GetLASSDataService } from "../../services/get-lassdata.service";
import { Cookie } from 'ng2-cookies';
@Component({
  selector: 'app-compare-page',
  templateUrl: './compare-page.component.html',
  styleUrls: ['./compare-page.component.css']
})
export class ComparePageComponent{

  constructor(public _getDeviceService:GetDeviceService,
              private _getDataService:GetDataService,
              private daterangepickerOptions: DaterangepickerConfig,
              public _getLassDeviceService:GetLassDeviceService,
              public _getUserDeviceService:GetUserDeviceService,
              private _getLassDataService:GetLASSDataService
  ) {}

  public ready = false; //Submit Btn disable
  private overBound = false;
  public errDate:boolean[] = [true,true];
  public data:Object[] = [];
  public deviceList = [];
  public LASSDeviceList = this._getLassDeviceService.LASSDeviceList;
  public userDevices:Array<String[]> = [];
  public userDevice_ids:Array<String> = this.userDevices.map(mapObj => mapObj[0]);
  private displayNearest = true;
  public duration:number = 6;

  //日期選擇器
  public dateRangepickerComponentArray:DaterangepickerComponent[] = [
      new DaterangepickerComponent(moment().subtract(this.duration,'day').startOf('day'),moment()),
      new DaterangepickerComponent(moment().subtract(this.duration,'day').startOf('day'),moment())
  ];

  //圖表開啟之頁籤
  public dataSet:string = 'pm25';

  //Loading蓋版
  public loading = true;

  //顏色清單
  private colorList:Array<any> = [];

  // lineChart
  private loadedLineChartDataTemplate:Boolean = false;
  private lineChartDataTemplate:Array<any> = [
    {data: [], label: 'Time 0',fill:false},
    {data: [], label: 'Time 1',fill:false}
  ];
  public lineChartData:Array<any> = _.cloneDeep(this.lineChartDataTemplate);
  public lineChartLabels:Array<any> = [];
  public lineChartOptions:any = {
    type: 'line',
    responsive: true,
    scales: {
      xAxes: [{
        type: 'time',
        distribution: 'linear',
        time: {
          displayFormats: {
            day: 'DD'
          },
          unit: 'day',
          tooltipFormat: '第DD日 HH:mm:ss'
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          min: 0
        }
      }]
    },
    elements:{
      point:{
        radius: 0,
        hitRadius: 4,
        hoverRadius: 4
      }
    }
    /*tooltips: {
      titleFontSize: 0,
      titleMarginBottom: 0,
      titleSpacing: 0
    }*/
  };
  public lineChartColors:Array<any> = [
    {
      backgroundColor: '#fff',
      borderColor: '#fff',
      pointBackgroundColor: '#fff',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#fff'
    },
    {
      backgroundColor: '#fff',
      borderColor: '#fff',
      pointBackgroundColor: '#fff',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#fff'
    },
    {
      backgroundColor: '#fff',
      borderColor: '#fff',
      pointBackgroundColor: '#fff',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#fff'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
  public lineChartStandby = false;
  // events
  //public chartClicked(e:any):void {
  //  console.log(e);
  //}
  //public chartHovered(e:any):void {
  //  console.log(e);
  //}



  ngOnInit() {
    this.daterangepickerOptions.settings = this.dateRangepickerComponentArray[0].settings;
    this.daterangepickerOptions.settings.startDate = moment().subtract(this.duration,'day');
    this.daterangepickerOptions.settings.maxDate = moment().subtract(this.duration,'day');
    this.daterangepickerOptions.settings.singleDatePicker = true;

    this.loading = true;

    this._getDeviceService.getDeviceHttpWithPromise().then((res)=>{
      res.sort(compareDevice_id);
      this.deviceList = res;
    });

    this._getLassDeviceService.getLassDeviceWithPromise().then((res)=>{
      res.sort(compareDevice_id);
      this.LASSDeviceList = res;
    });

    this.userDevices = [];
    this.userDevice_ids = [];
    this._getUserDeviceService.getDevices(2,(res)=>{
      this.displayNearest = (Cookie.get('displayNearest')=='1');
      this.userDevices = res;
      this.userDevice_ids = this.userDevices.map(mapObj => mapObj[0]);
      this.dateRangepickerComponentArray = [];
      for(let i in this.userDevice_ids) {
        this.dateRangepickerComponentArray.push(new DaterangepickerComponent(moment().subtract(this.duration, 'day').startOf('day'), moment()));
      }
      this.loading = false;
      this.checkReady();
      this.setChartsColor();
    });

    function compareDevice_id(a,b) {
      if (a.device_id < b.device_id)
        return -1;
      if (a.device_id > b.device_id)
        return 1;
      return 0;
    }
  }

  //chart處理
  private setChartsColor(){
    //Generate Random Color
    let color = new RColor;
    this.colorList = [];
    for(let i=0;i<this.userDevice_ids.length;i++){
      this.colorList.push(color.get());
    }

    this.lineChartColors.length = 0;
    this.colorList.forEach((value,index,array)=>{
      this.lineChartColors.push({
        backgroundColor: `rgba(${value[0]},${value[1]},${value[2]},0.2)`,
        borderColor: `rgba(${value[0]},${value[1]},${value[2]},0.9)`,
        pointBackgroundColor: `rgba(${value[0]},${value[1]},${value[2]},0.9)`,
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: `rgba(${value[0]},${value[1]},${value[2]},0.9)`
      });
    });
    this.setLineChartDataTemplate();
  }

  private setLineChartDataTemplate(){
    let lineChartDataTemplate:Array<any> = [];

    this.dateRangepickerComponentArray.forEach((value:DaterangepickerComponent, index, array)=> {
      let base = value.rangeValue[0].format('YYYY-MM-DD');
      lineChartDataTemplate.push(
          {data: [], label: base,fill:false}
      );
    });

    this.lineChartDataTemplate = _.cloneDeep(lineChartDataTemplate);
    this.loadedLineChartDataTemplate = true;
    this.loading = false;
  }

  public deviceChange(i:number,device:String,type:String){
    //noinspection TypeScriptUnresolvedVariable
    this.userDevices[i] = [device,type];
    while(_.findIndex(this.userDevices,[1,"text"])>=0) {
      this.userDevices.splice(_.findIndex(this.userDevices,[1,"text"]), 1);
    }
    this.userDevice_ids = this.userDevices.map(mapObj => mapObj[0]);
  }

//form處理
  public addDateRangepickerComponentArray(){

    this.userDevices.push(['請選擇測站','text']);
    this.errDate.push(true);
    this.dateRangepickerComponentArray.push(new DaterangepickerComponent(moment().subtract(this.duration,'day').startOf('day'),moment()));
    this.setChartsColor();
    this.checkReady();
  }

  public deleteDateRangepickerComponentArray(index:number) {
    this.userDevices.splice(index,1);
    this.userDevice_ids = this.userDevices.map(mapObj => mapObj[0]);
    this.errDate.splice(index,1);
    this.dateRangepickerComponentArray.splice(index,1);
    this.setChartsColor();
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
    this.dateRangepickerComponentArray.forEach((value,index,array)=>{
      if(value.getTimeByDate()[0]>this.daterangepickerOptions.settings.maxDate || value.getTimeByDate()[0]<this.daterangepickerOptions.settings.minDate) {
        this.overBound = true;
        this.errDate.push(false);
      }else{
        this.errDate.push(true);
      }
    });

    this.ready = ((this.dateRangepickerComponentArray.length > 0 && this.userDevice_ids.length > 0) && !this.overBound);
  }

  private submit(){
    //console.log(this.uniqueDateRangepickerComponentArray);
    if(this.ready){
      this.loading = true;
      this.lineChartStandby = false;
      this.getDeviceDetail();
    }
  }

  //獲取空汙資料
  private startFlag = false;
  private getDeviceDetail(){
    this.data.length = 0;
    let finishFlag = 0;
    if(!this.startFlag) {
      this.startFlag = true;
      this.userDevices.forEach((value, index, array) => {
        switch (value[1]) {
          case 'LASS':
            this._getLassDataService.setParam([value[0]], this.dateRangepickerComponentArray[index].getSQLString()[0],this.dateRangepickerComponentArray[index].getSQLString()[1]);
            this._getLassDataService.getDataHttpWithPromise().then((res) => {
              this.data[index] = res;
              finishFlag++;
              if (finishFlag == this.userDevices.length) {
                if (this.loadedLineChartDataTemplate) {
                  this.setCharts();
                  this.startFlag = false;
                }
              }
            });
            break;
          case 'THU':
            this._getDataService.setParam([value[0]],  this.dateRangepickerComponentArray[index].getSQLString()[0],this.dateRangepickerComponentArray[index].getSQLString()[1]);
            this._getDataService.getDataHttpWithPromise().then((res) => {
              this.data[index] = res;
              finishFlag++;
              if (finishFlag == this.userDevices.length) {
                if (this.loadedLineChartDataTemplate) {
                  this.setCharts();
                  this.startFlag = false;
                }
              }
            });
            break;
        }
      });
    }
  }

  public setCharts(){
    let tmp = _.cloneDeep(this.lineChartDataTemplate);
    this.userDevice_ids.forEach((value, index, array)=> {
      tmp[index].label = value;
    });
    this.data.forEach((value:Object[], index, array)=> {
      let tmp2;
      value.forEach((value2,index2,array2)=>{
        tmp2 = moment.utc(moment(value2['time']).valueOf() - this.dateRangepickerComponentArray[index].rangeValue[0].valueOf());
        tmp[index].data.push({x: tmp2.format('YYYY-MM-DD HH:mm:ss'), y: value2[this.dataSet]});
      });
    });
    this.lineChartData = _.cloneDeep(tmp);
    this.lineChartStandby = true;
    this.loading = false;
  }
}
