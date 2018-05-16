import { Component, ViewChild, AfterViewInit, Input } from '@angular/core';
import { URLSearchParams } from '@angular/http';

import { DaterangepickerComponent } from "../../daterangepicker.component"
import { Daterangepicker, DaterangepickerConfig } from 'ng2-daterangepicker';

//noinspection TypeScriptCheckImport
import * as _ from "lodash";

import { GetDataService } from "../../services/get-data.service";
import { GetLASSDataService } from "../../services/get-lassdata.service";
import { GetDeviceService } from "../../services/get-device.service";
import { DataTableComponent } from "../../data-table/data-table.component";
import { GetUserDeviceService } from "../../services/get-user-device.service";

declare var RColor:any;
import { Cookie } from 'ng2-cookies';
@Component({
  selector: 'app-average-page',
  templateUrl: './average-page.component.html',
  styleUrls: ['./average-page.component.css']
})
export class AveragePageComponent {
  //是否顯示表格
  @Input() tableVisible:boolean = true;
  constructor(private _getClientInfoService:GetDeviceService,
              private _getDataService:GetDataService,
              private daterangepickerOptions: DaterangepickerConfig,
              private _getUserDeviceService:GetUserDeviceService,
              private _getLassDataService:GetLASSDataService) {}
  //資料
  public data:Object[] = [];
  public avgData:Object[] = [];
  public devices:any = (Cookie.get('devices'))?JSON.parse(Cookie.get('devices')):[];
  public device_ids = this.devices.map(mapObj => mapObj[0]);

  //日期選擇器
  public _DaterangepickerComponent = new DaterangepickerComponent();
  public rangeValue:Date[]= this._DaterangepickerComponent.getTimeByDate();

  //顏色清單
  private colorList:Array<any> = [];

  //表格列數
  public tableRowLimit:number = 3;

  //Loading蓋版
  public loading = true;

  // barChart
  private loadedBarChartDataTemplate:Boolean = false;
  private barChartDataTemplate:Array<any> = [
    {data: [], label: 'Client 0'}
  ];
  public barChartData:Array<any> = _.cloneDeep(this.barChartDataTemplate);
  public barChartLabels:string[] = ['Pm1', 'Pm2.5', 'Pm10', '濕度', '溫度'];
  public barChartOptions:any = {
    type: 'bar',
    responsive: true,
    scaleShowVerticalLines: false,
  };
  public barChartColors:Array<any> = [
    { backgroundColor: 'rgb(0,0,177)' },
    { backgroundColor: 'rgb(77,0,0)' },
    { backgroundColor: 'rgb(0,159,0)' }
  ];
  public barChartLegend:boolean = true;
  public barChartType:string = 'bar';
  public barChartStandby = false;
  // events
  //public chartClicked(e:any):void {
  //  console.log(e);
  //}
  //public chartHovered(e:any):void {
  //  console.log(e);
  //}
  
  ngOnInit() {
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
    //Generate Radom Color
    let color = new RColor;
    this.colorList = [];
    for(let i=0;i<this.devices.length;i++){
      this.colorList.push(color.get());
    }

    this.barChartColors.length = 0;
    this.colorList.forEach((value,index,array)=>{
      this.barChartColors.push({
        backgroundColor: `rgba(${value[0]},${value[1]},${value[2]},0.4)`,
        borderColor: `rgba(${value[0]},${value[1]},${value[2]},0.8)`,
        borderWidth:3
      });
    });
    this.setBarChartDataTemplate();
  }

  private setBarChartDataTemplate(){
    let barChartDataTemplate:Array<any> = [];

    this.devices.forEach(function(value,index,array){
      barChartDataTemplate.push(
          {data: [], label: value[0]}
      );
    });

    this.barChartDataTemplate = _.cloneDeep(barChartDataTemplate);
    this.loadedBarChartDataTemplate = true;
    this.getDeviceDetail();
  }

  private startFlag = false;
  private getDeviceDetail(){
    this.data.length = 0;
    let finishFlag = 0;
    if(!this.startFlag) {
      this.startFlag = true;
      this.devices.forEach((value, index, array) => {
        switch (value[1]) {
          case 'LASS':
            this._getLassDataService.setParam([value[0]], this._DaterangepickerComponent.getSQLString()[0], this._DaterangepickerComponent.getSQLString()[1]);
            this._getLassDataService.getDataHttpWithPromise().then((res) => {
              this.data = this.data.concat(res);
              finishFlag++;
              if (finishFlag == this.devices.length) {
                if (this.loadedBarChartDataTemplate) {
                  this.calcAverageData();
                }
              }
            });
            break;
          case 'THU':
            this._getDataService.setParam([value[0]], this._DaterangepickerComponent.getSQLString()[0], this._DaterangepickerComponent.getSQLString()[1]);
            this._getDataService.getDataHttpWithPromise().then((res) => {
              this.data = this.data.concat(res);
              finishFlag++;
              if (finishFlag == this.devices.length) {
                if (this.loadedBarChartDataTemplate) {
                  this.calcAverageData();
                }
              }
            });
            break;
        }
      });
    }
  }

  //計算平均
  public calcAverageData(){
    this.barChartStandby = false;
    let dataSet = ['pm1','pm25','pm10','temp','humid'];
    //計算平均
    let temp:Object[] = [];
    for(let i=0;i<this.device_ids.length;i++){
      temp.push({
        'pm1': 0,
        'pm25': 0,
        'pm10': 0,
        'temp': 0,
        'humid': 0,
        'count': 0,
        'device_id':this.device_ids[i]
      });
    }

    this.data.forEach((value,index,array)=>{
      dataSet.forEach((value2,index,array)=> {
        if(temp[this.device_ids.indexOf(value['device_id'])][value2]){
          temp[this.device_ids.indexOf(value['device_id'])][value2] = temp[this.device_ids.indexOf(value['device_id'])][value2] + Number(value[value2]);
        }else{
          temp[this.device_ids.indexOf(value['device_id'])][value2] = Number(value[value2]);
        }
      });
      temp[this.device_ids.indexOf(value['device_id'])]['count']++;
    });

    temp.forEach((value,index,array)=>{
      dataSet.forEach((value2,index2,array)=> {
        temp[index][value2] = Math.round((temp[index][value2]/temp[index]['count'])*100)/100;
      });
    });
    this.avgData = _.cloneDeep(temp);
    this.setCharts();
  }

  setCharts(){
    this.barChartData = _.cloneDeep(this.barChartDataTemplate);
    this.avgData.forEach((value: Object,index,array)=>{
      this.barChartData[index].label = value['device_id'];
      this.barChartData[index].data = [value['pm1'],value['pm25'],value['pm10'],value['humid'],value['temp']];
    });
    this.barChartStandby = true;
    this.loading = false;
  }
}
