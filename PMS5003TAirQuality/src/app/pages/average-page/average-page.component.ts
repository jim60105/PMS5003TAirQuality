import { Component, ViewChild, AfterViewInit, Input } from '@angular/core';
import { URLSearchParams } from '@angular/http';

import { DaterangepickerComponent } from "../../daterangepicker.component"
import { Daterangepicker, DaterangepickerConfig } from 'ng2-daterangepicker';

//noinspection TypeScriptCheckImport
import * as _ from "lodash";

import { GetDataService } from "../../services/get-data.service";
import { GetClientInfoService } from "../../services/get-client-info.service";
import { DataTableComponent } from "../../data-table/data-table.component";

declare var RColor:any;

@Component({
  selector: 'app-average-page',
  templateUrl: './average-page.component.html',
  styleUrls: ['./average-page.component.css']
})
export class AveragePageComponent {
  //是否顯示表格
  @Input() tableVisible:boolean = true;
  constructor(private _getClientInfoService:GetClientInfoService,
              private _getDataService:GetDataService,
              private daterangepickerOptions: DaterangepickerConfig) {}
  //資料
  public data:Object[] = [];
  public avgData:Object[] = [];
  public devices:any = [];

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
    {data: [], label: 'Client 0'},
    {data: [], label: 'Client 1'},
    {data: [], label: 'Client 2'}
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
    //獲取devices
    this._getClientInfoService.getClientDataHttpWithPromise().then((res)=>{
      this.devices = res;
      //設定列數為client數量
      this.tableRowLimit = this.devices.length;
      this.setChartsColor();
    });
    this.daterangepickerOptions.settings = this._DaterangepickerComponent.settings;
  }

  private selectedDate(value: any, dateInput: any) {
    this.rangeValue[0] = value.start;
    this.rangeValue[1] = value.end;
    dateInput = this.rangeValue;
    //日期選擇改變時觸發getDataHttp
    this._DaterangepickerComponent.setTimeByDate(this.rangeValue[0],this.rangeValue[1]);
    this.loading = true;
    this.getDataHttp();
  }

  setChartsColor(){
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

  setBarChartDataTemplate(){
    let barChartDataTemplate:Array<any> = [];

    this.devices.forEach(function(value,index,array){
      barChartDataTemplate.push(
          {data: [], label: value['name']}
      );
    });

    this.barChartDataTemplate = _.cloneDeep(barChartDataTemplate);
    this.loadedBarChartDataTemplate = true;
    this.getDataHttp();
  }

  //獲取空汙資料
  public getDataHttp(){
    this.barChartStandby = false;
    let params = new URLSearchParams();

    params.set('minDate', this._DaterangepickerComponent.getSQLString()[0]);
    params.set('maxDate', this._DaterangepickerComponent.getSQLString()[1]);

    this._getDataService.getDataHttpWithPromise(params).then((res)=>{
      this.data = res;

      //計算平均
      let temp:Object[] = [];
      for(let i=0;i<this.devices.length;i++){
        temp.push({'count': 0});
      }
      res.forEach((value,index,array)=>{
        temp[value.clientNum]['pm1'] = ((temp[value.clientNum]['pm1'])?temp[value.clientNum]['pm1']:0) + Number(value['pm1']);
        temp[value.clientNum]['pm25'] = ((temp[value.clientNum]['pm25'])?temp[value.clientNum]['pm25']:0) + Number(value['pm25']);
        temp[value.clientNum]['pm10'] = ((temp[value.clientNum]['pm10'])?temp[value.clientNum]['pm10']:0) + Number(value['pm10']);
        temp[value.clientNum]['temp'] = ((temp[value.clientNum]['temp'])?temp[value.clientNum]['temp']:0) + Number(value['temp']);
        temp[value.clientNum]['humid'] = ((temp[value.clientNum]['humid'])?temp[value.clientNum]['humid']:0) + Number(value['humid']);
        temp[value.clientNum]['count'] ++;
      });

      this.devices.forEach((value,index,array)=>{
        temp[index]['clientNum'] = index;
      });
      temp.forEach((value,index,array)=>{
        Object.keys(value).forEach((key)=> {
          if(key!='count' && key!='clientNum') {
            temp[index][key] = Math.round((temp[index][key]/temp[index]['count'])*100)/100;
          }
        });
      });
      this.avgData = _.cloneDeep(temp);
      this.setCharts();
    });
  }

  setCharts(){
    this.barChartData = _.cloneDeep(this.barChartDataTemplate);
    this.avgData.forEach((value: Object,index,array)=>{
      this.barChartData[value['clientNum']].data = [value['pm1'],value['pm25'],value['pm10'],value['humid'],value['temp']];
    });
    this.barChartStandby = false;
    this.barChartStandby = true;
    this.loading = false;
  }
}
