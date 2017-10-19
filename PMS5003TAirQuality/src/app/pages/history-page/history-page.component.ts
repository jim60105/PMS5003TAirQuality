import { Component, ViewChild, Input } from '@angular/core';
import { URLSearchParams } from '@angular/http';

import { BsDaterangepickerComponent } from "../../bs-daterangepicker.component"

//noinspection TypeScriptCheckImport
import * as _ from "lodash";

declare var RColor:any;

//https://stackoverflow.com/a/42692601/8706033
import { BaseChartDirective } from 'ng2-charts/ng2-charts';

import { DataTableComponent } from "../../data-table/data-table.component";

import { GetRealTimeDataService } from "../../services/get-real-time-data.service";
import { GetClientInfoService } from "../../services/get-client-info.service";
import { GetDataService } from "../../services/get-data.service";
@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent {
  //是否顯示表格
  @Input() tableVisible:boolean = true;
  constructor(private _getClientInfoService:GetClientInfoService,
              private _getDataService:GetDataService) {}

  //日期選擇器
  public bsRangeValue = new BsDaterangepickerComponent();
  public bs:Date[]= this.bsRangeValue.getTimeByDate();

  //顏色清單
  private colorList:Array<any> = [];

  //資料
  public data:Object[] = [];
  public clientInfo:any = [];

  //圖表開啟之頁籤
  public dataSet:string = 'pm25';

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
    this._getClientInfoService.getClientDataHttpWithPromise().then((res)=>{
      this.clientInfo = res;
      //設定列數為client數量
      this.tableRowLimit = this.clientInfo.length;
      this.setChartsColor();
    });
  }

  ngDoCheck() {
    //日期選擇改變時觸發getDataHttp
    if(!_.isEqual(this.bs,this.bsRangeValue.getTimeByDate())) {
      this.bsRangeValue.setTimeByDate(this.bs[0],this.bs[1]);
      this.getDataHttp();
    }
  }

  private setChartsColor(){
    //Generate Radom Color
    let color = new RColor;
    this.colorList = [];
    for(let i=0;i<this.clientInfo.length;i++){
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

    this.clientInfo.forEach(function(value,index,array){
      lineChartDataTemplate.push(
          {data: [], label: value['name'],fill:false}
      );
    });

    this.lineChartDataTemplate = _.cloneDeep(lineChartDataTemplate);
    this.loadedLineChartDataTemplate = true;
    this.getDataHttp();
  }

  //獲取空汙資料
  public getDataHttp(){
    this.lineChartStandby = false;
    let params = new URLSearchParams();

    params.set('minDate', this.bsRangeValue.getSQLString()[0]);
    params.set('maxDate', this.bsRangeValue.getSQLString()[1]);

    this._getDataService.getDataHttpWithPromise(params).then((res)=>{
      this.data = res;
      if(this.loadedLineChartDataTemplate){
        this.setCharts();
        this.calcPercentageData();
      }
    });
  }

  public setCharts(){
    this.lineChartData = _.cloneDeep(this.lineChartDataTemplate);
    this.data.forEach((value: Object, index, array)=>{
      this.lineChartData[value['clientNum']].data.push({x:value['time'],y:value[this.dataSet]});
    });
    this.lineChartStandby = false;
    this.lineChartStandby = true;
  }

  public percentageData:Object[] = [];
  public perventageTitle = ['0%~20%','21%~40%','41%~60%','61%~80%','81%~100%'];
  //表格列數
  public tableRowLimit:number = 3;
  public tableTitle = ['位置','0%~20%','21%~40%','41%~60%','61%~80%','81%~100%'];
  public calcPercentageData() {
    let max:number[]=[];
    let min:number[]=[];
    let level:number[][]=[[],[],[],[]];
    let percentageCount:number[][]=[];
    let dataCount:number[] = [];
    this.data.forEach((value: Object, index, array)=>{
      //與陣列內未初始化之元素相比較，皆回傳false
      max[value['clientNum']] = (value[this.dataSet]<max[value['clientNum']])?max[value['clientNum']]:Number(value[this.dataSet]);
      min[value['clientNum']] = (value[this.dataSet]>min[value['clientNum']])?min[value['clientNum']]:Number(value[this.dataSet]);
    });
    this.clientInfo.forEach((value: Object, i, array)=>{
      let gap = (max[i]-min[i])/5;
      level[0][i] = min[i]+gap;
      level[1][i] = min[i]+gap*2;
      level[2][i] = min[i]+gap*3;
      level[3][i] = min[i]+gap*4;
      percentageCount[i] = [0,0,0,0,0];
      dataCount[i] = 0;
      this.percentageData[i] = {};
    });
    this.data.forEach((value: Object, index, array)=>{
      switch (true){
        case (value[this.dataSet]<level[0][value['clientNum']]):
          percentageCount[value['clientNum']][0]++;
          break;
        case (value[this.dataSet]<level[1][value['clientNum']]):
          percentageCount[value['clientNum']][1]++;
          break;
        case (value[this.dataSet]<level[2][value['clientNum']]):
          percentageCount[value['clientNum']][2]++;
          break;
        case (value[this.dataSet]<level[3][value['clientNum']]):
          percentageCount[value['clientNum']][3]++;
          break;
        case (value[this.dataSet]<max[value['clientNum']]):
          percentageCount[value['clientNum']][4]++;
          break;
      }
      dataCount[value['clientNum']]++;
    });
    percentageCount.forEach((value, index, array)=>{
      this.percentageData[index]['0%~20%'] = Math.round(percentageCount[index][0]/dataCount[index]*100*10000)/10000 + '%';
      this.percentageData[index]['21%~40%'] = Math.round(percentageCount[index][1]/dataCount[index]*100*10000)/10000 + '%';
      this.percentageData[index]['41%~60%'] = Math.round(percentageCount[index][2]/dataCount[index]*100*10000)/10000 + '%';
      this.percentageData[index]['61%~80%'] = Math.round(percentageCount[index][3]/dataCount[index]*100*10000)/10000 + '%';
      this.percentageData[index]['81%~100%'] = Math.round(percentageCount[index][4]/dataCount[index]*100*10000)/10000 + '%';
      this.percentageData[index]['clientNum'] = index;
    });
  }

}
