import { Component, ViewChild, Input } from '@angular/core';
import { URLSearchParams } from '@angular/http';

declare var RColor:any;
//noinspection TypeScriptCheckImport
import * as _ from "lodash";

import * as moment from 'moment';
import { DaterangepickerComponent } from "../../daterangepicker.component"
import { Daterangepicker, DaterangepickerConfig } from 'ng2-daterangepicker';

//https://stackoverflow.com/a/42692601/8706033
import { BaseChartDirective } from 'ng2-charts/ng2-charts';

import { DataTableComponent } from "../../data-table/data-table.component";

import { GetSingleDataService } from "../../services/get-single-data.service";
import { GetDeviceService } from "../../services/get-device.service";
import { GetDataService } from "../../services/get-data.service";
import { GetLassDeviceService } from "../../services/get-lassdevice.service";
import { GetUserDeviceService } from "../../services/get-user-device.service";
import { GetLASSDataService } from "../../services/get-lassdata.service";
import { Cookie } from 'ng2-cookies';
@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent {
  //是否顯示表格
  @Input() tableVisible:boolean = true;
  constructor(private _getClientInfoService:GetDeviceService,
              private _getDataService:GetDataService,
              private daterangepickerOptions: DaterangepickerConfig,
              private _getLassDeviceService:GetLassDeviceService,
              private _getUserDeviceService:GetUserDeviceService,
              private _getLassDataService:GetLASSDataService,
              private _getDeviceService:GetDeviceService) {}
  //日期選擇器
  public _DaterangepickerComponent = new DaterangepickerComponent();
  public rangeValue:Date[] = this._DaterangepickerComponent.getTimeByDate();

  //顏色清單
  private colorList:Array<any> = [];

  //資料
  public data:Object[] = [];
  public devices:any = (Cookie.get('devices'))?JSON.parse(Cookie.get('devices')):[];
  public device_ids = this.devices.map(mapObj => mapObj[0]);

  //Loading蓋版
  public loading = true;

  //圖表開啟之頁籤
  public dataSet:string = 'pm25';

  //AQI表格
  public percentageData:Object[] = [];
  public percentageTitle = ['位置','良好 0～50','普通 51～100','對敏感族群不健康 101～150','對所有族群不健康 151～200','非常不健康 201～300','危害 301～400','危害 401～500'];
  public percentageProperty = ['device_id',0,1,2,3,4,5,6];
  public percentageSortable = ["","","","","","","",""];
  public percentageTitleClass = ['','AQI1','AQI2','AQI3','AQI4','AQI5','AQI6','AQI6'];
  //列數
  public tableRowLimit:number = 3;

  // lineChart
  private loadedLineChartDataTemplate:Boolean = false;
  private lineChartDataTemplate:Array<any> = [
    {data: [], label: 'Client 0',fill:false},
    {data: [], label: 'Client 1',fill:false},
    {data: [], label: 'Client 2',fill:false}
  ];
  public lineChartData:Array<any> = _.cloneDeep(this.lineChartDataTemplate);
  public lineChartLabels:Array<any> = [];
  public lineChartOptions:any = {
    type: 'line',
    responsive: true,
    scales: {
      xAxes: [{
        type: 'time',
        distribution: 'linear'
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
    //this._getDeviceService.getDeviceHttpWithPromise().then((res)=>{
    //  this.devices = res;
    //  //設定列數為client數量
    //  this.tableRowLimit = this.devices.length;
    //  this.setChartsColor();
    //});

    this.loading = true;

    this._getUserDeviceService.getDevices(3,(res)=> {
      this.devices = _.cloneDeep(res);
      //設定列數為client數量
      this.tableRowLimit = this.devices.length;
      this.setChartsColor();
    });

    this.daterangepickerOptions.settings = this._DaterangepickerComponent.settings;
  }

  ngDoCheck() {
    try {
      if (Cookie.get('devices')!="" && !_.isEqual(this.devices, JSON.parse(Cookie.get('devices')))) {
        this.loading = true;
        this.devices = _.cloneDeep(JSON.parse(Cookie.get('devices')));
        this.device_ids = this.devices.map(mapObj => mapObj[0]);
        //設定列數為client數量
        this.tableRowLimit = this.devices.length;
        this.setChartsColor();
      }
    }catch(e){
      console.warn("Devices compare error. Error:"+e);
    }


  }

  private selectedDate(value: any, dateInput: any) {
    this.rangeValue[0] = value.start;
    this.rangeValue[1] = value.end;
    dateInput = this.rangeValue;
    //日期選擇改變時觸發getDataHttp
    this._DaterangepickerComponent.setTimeByDate(this.rangeValue[0],this.rangeValue[1]);
    this.loading = true;
    this.getDeviceDetail();
  }

  private setChartsColor(){
    //Generate Random Color
    let color = new RColor;
    this.colorList = [];
    for(let i=0; i<this.devices.length; i++){
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

    this.devices.forEach(function(value, index, array){
      lineChartDataTemplate.push(
          {data: [], label: value[0],fill:false}
      );
    });

    this.lineChartDataTemplate = _.cloneDeep(lineChartDataTemplate);
    this.loadedLineChartDataTemplate = true;
    this.getDeviceDetail();
  }

  private getDeviceDetail(){
    this.data.length = 0;
    let finishFlag = 0;
    this.devices.forEach((value,index,array)=>{
      switch (value[1]) {
        case 'LASS':
          this._getLassDataService.setParam([value[0]],this._DaterangepickerComponent.getSQLString()[0],this._DaterangepickerComponent.getSQLString()[1]);
          this._getLassDataService.getDataHttpWithPromise().then((res)=>{
            this.data = this.data.concat(res);
            finishFlag++;
            if (finishFlag == this.devices.length) {
              if (this.loadedLineChartDataTemplate) {
                this.setCharts();
                this.calcPercentageData();
              }
            }
          });
          break;
        case 'THU':
          this._getDataService.setParam([value[0]],this._DaterangepickerComponent.getSQLString()[0],this._DaterangepickerComponent.getSQLString()[1]);
          this._getDataService.getDataHttpWithPromise().then((res)=>{
            this.data = this.data.concat(res);
            finishFlag++;
            if (finishFlag == this.devices.length) {
              if(this.loadedLineChartDataTemplate){
                this.setCharts();
                this.calcPercentageData();
              }
            }
          });
          break;
      }
    });
  }

  //獲取空汙資料
  // public getLASSDataHttp(){
  //   this.lineChartStandby = false;
  //   this._getLassDataService.setParam(this.devices,this._DaterangepickerComponent.getSQLString()[0],this._DaterangepickerComponent.getSQLString()[1]);
  //   this._getLassDataService.getDataHttpWithPromise().then((res)=>{
  //     this.data = res;
  //     if(this.loadedLineChartDataTemplate){
  //       this.setCharts();
  //       this.calcPercentageData();
  //     }
  //   });
  // }

  public setCharts(){
    this.lineChartData = _.cloneDeep(this.lineChartDataTemplate);
    this.data = _.uniqWith(this.data,_.isEqual);
    this.data.forEach((value: Object, index, array)=>{
      this.lineChartData[this.devices.map(mapObj => mapObj[0]).indexOf(value['device_id'])].data.push({x:value['time'],y:value[this.dataSet]});
    });
    this.lineChartStandby = false;
    this.lineChartStandby = true;
    this.loading = false;
  }

  public calcPercentageData() {
    let percentageCount:number[][]=[];
    let dataCount:number[] = [];
    let level25 = [15.5,35.5,54.5,150.5,250.5,350.5,500.5];
    let level10 = [55,126,255,355,425,505,605];
    let level:number[]=(this.dataSet=='pm25')?level25:level10;

    this.device_ids.forEach((value: String[], i, array)=>{
      percentageCount[i] = [0,0,0,0,0,0,0];
      dataCount[i] = 0;
      this.percentageData[i] = {device_id:value};
    });

    this.data.forEach((value: Object, index, array)=>{
      switch (true){
        case (value[this.dataSet]<level[0]):
          percentageCount[this.device_ids.indexOf(value['device_id'])][0]++;
          break;
        case (value[this.dataSet]<level[1]):
          percentageCount[this.device_ids.indexOf(value['device_id'])][1]++;
          break;
        case (value[this.dataSet]<level[2]):
          percentageCount[this.device_ids.indexOf(value['device_id'])][2]++;
          break;
        case (value[this.dataSet]<level[3]):
          percentageCount[this.device_ids.indexOf(value['device_id'])][3]++;
          break;
        case (value[this.dataSet]<level[4]):
          percentageCount[this.device_ids.indexOf(value['device_id'])][4]++;
          break;
        case (value[this.dataSet]<level[5]):
          percentageCount[this.device_ids.indexOf(value['device_id'])][5]++;
          break;
        case (value[this.dataSet]<level[6]):
          percentageCount[this.device_ids.indexOf(value['device_id'])][6]++;
          break;
      }
      dataCount[this.device_ids.indexOf(value['device_id'])]++;
    });
    percentageCount.forEach((value, index, array)=>{
      for(let i=0;i<7;i++){
        this.percentageData[index][i] = Math.round(percentageCount[index][i]/dataCount[index]*100*100)/100 + '%';
      }
      //this.percentageData[index][this.device_ids.indexOf(value['device_id'])] = index;
    });
  }

}
