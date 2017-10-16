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
  @Input() tableVisible:boolean = true;
  constructor(private _getClientInfoService:GetClientInfoService,
              private _getDataService:GetDataService) {}

  public datas:Object[] = [];
  public bsRangeValue = new BsDaterangepickerComponent();
  public bs:Date[]= this.bsRangeValue.getTimeByDate();

  ngOnInit() {
    //Generate Radom Color
    this._getClientInfoService.getClientDataHttpWithPromise().then((res)=>{
      this.clientInfo = res;

      this.setChartsColor(()=>{
        let color = new RColor;
        this.colorList = [];
        for(let i=0;i<this.clientInfo.length;i++){
          this.colorList.push(color.get());
        }
      });
    });
    this.getDataHttp();
  }

  ngDoCheck() {
    if(!_.isEqual(this.bs,this.bsRangeValue.getTimeByDate())) {
      this.bsRangeValue.setTimeByDate(this.bs[0],this.bs[1]);
      this.getDataHttp();
      //console.log('bsRangeValue change detect.');
    }
  }

  getDataHttp(){
    let params = new URLSearchParams();

    params.set('minDate', this.bsRangeValue.getSQLString()[0]);
    params.set('maxDate', this.bsRangeValue.getSQLString()[1]);

    this._getDataService.getDataHttpWithPromise(params).then((res)=>{
      this.datas = res;
      if(this.loadedLineChartDataTemplate){
        this.setCharts();
      }
    });
  }

  private colorList:Array<any> = [];
  public clientInfo:any = [];

  // lineChart
  private loadedLineChartDataTemplate:Boolean = false;
  private lineChartDataTemplate:Array<any> = [
    {data: [], label: 'Client 0',fill:false},
    {data: [], label: 'Client 1',fill:false},
    {data: [], label: 'Client 2',fill:false}
  ];
  public lineChartData:Array<any> = _.cloneDeep(this.lineChartDataTemplate);
  public lineChartLabels:Array<any> = [];
//  options: { elements: { point: { hitRadius: 10, hoverRadius: 10 } } }
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

    { // grey
      backgroundColor: 'rgba(0,0,177,0.2)',
      borderColor: 'rgba(0,0,177,1)',
      pointBackgroundColor: 'rgba(0,0,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(0,0,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,0,0,0.2)',
      borderColor: 'rgba(77,0,0,1)',
      pointBackgroundColor: 'rgba(77,0,0,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,0,0,1)'
    },
    { // grey
      backgroundColor: 'rgba(0,159,0,0.2)',
      borderColor: 'rgba(0,159,0,1)',
      pointBackgroundColor: 'rgba(0,159,0,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(0,159,0,0.8)'
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

  setChartsColor(callback:Function){
    callback();
    this.lineChartColors.length = 0;
    this.colorList.forEach((value,index,array)=>{
      this.lineChartColors.push({
        backgroundColor: `rgba(${value[0]},${value[1]},${value[2]},0.2)`,
        borderColor: `rgba(${value[0]},${value[1]},${value[2]},1)`,
        pointBackgroundColor: `rgba(${value[0]},${value[1]},${value[2]},1)`,
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: `rgba(${value[0]},${value[1]},${value[2]},1)`
      });
    });
    this.setLineChartDataTemplate();

  }

  setLineChartDataTemplate(){
    let lineChartDataTemplate:Array<any> = [];

    this.clientInfo.forEach(function(value,index,array){
      lineChartDataTemplate.push(
          {data: [], label: value['name'],fill:false}
      );
    });

    this.lineChartDataTemplate = _.cloneDeep(lineChartDataTemplate);
    this.loadedLineChartDataTemplate = true;
    this.setCharts();

  }

  public dataSet:string = 'pm25';
  setCharts(){
    this.lineChartData = _.cloneDeep(this.lineChartDataTemplate);
    this.datas.forEach((value: Object,index,array)=>{
      this.lineChartData[value['clientNum']].data.push({x:value['time'],y:value[this.dataSet]});
    });
    this.lineChartStandby = true;
  }


}
