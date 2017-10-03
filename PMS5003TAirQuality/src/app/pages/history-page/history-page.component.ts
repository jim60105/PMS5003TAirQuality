import { Component, DoCheck, ViewChild  } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { DATA } from '../../../assets/mock-data';
import { CLIENTINFO } from '../../../assets/mock-clientInfo';

import { arrayEqual } from '../../../assets/array-equal';
import { BsDaterangepickerComponent } from "../../bs-daterangepicker.component"
//noinspection TypeScriptCheckImport
import * as _ from "lodash";
declare var RColor:any;

//https://stackoverflow.com/a/42692601/8706033
import { BaseChartDirective } from 'ng2-charts/ng2-charts';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent {

  constructor(private http:Http) {}
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  public datas:Object[] = [];
  public bsRangeValue = new BsDaterangepickerComponent();
  public bs:Date[]= this.bsRangeValue.getTimeByDate();

  ngOnInit() {
    //Generate Radom Color
    this.getClientDataHttp();
    this.getDataHttp();
  }

  ngDoCheck() {
    if(!arrayEqual(this.bs,this.bsRangeValue.getTimeByDate())) {
      this.bsRangeValue.setTimeByDate(this.bs[0],this.bs[1]);
      this.getDataHttp();
      //console.log('bsRangeValue change detect.');
    }
  }

  private dbURL = "/assets/php/getDBByTime.php";

  getDataHttp(){
    let params = new URLSearchParams();

    params.set('minDate', this.bsRangeValue.getSQLString()[0]);
    params.set('maxDate', this.bsRangeValue.getSQLString()[1]);
    //console.log(params);
    //noinspection TypeScriptValidateTypes,TypeScriptUnresolvedFunction
    return this.http.get(this.dbURL, {search: params}).map((res:Response) => {
      let body = res.json();
      return body || {};
    }).subscribe((dataIn)=> {
      //console.log(dataIn.toString());
      this.datas = dataIn;
      if(this.loadedLineChartDataTemplate){
        this.setCharts();
      }
    }, (err)=> {
      console.error("Err: " + err);
      this.datas = DATA;  //Use mock data
      if(this.loadedLineChartDataTemplate) {
        this.setCharts();
      }
    });
  }

  private colorList:Array<any> = [];
  private clientInfo:Array<any> = [];
  getClientDataHttp(){
    this.lineChartStandby = false;
    //noinspection TypeScriptUnresolvedFunction
    return this.http.get("/assets/php/getClientInfo.php").map((res:Response) => {
      let body = res.json();
      return body || {};
    }).subscribe((dataIn)=> {
      //console.log(dataIn.toString());
      this.clientInfo = dataIn;

      this.setChartsColor(()=> {
        let color = new RColor;
        this.colorList = [];
        for (let i = 0; i < this.clientInfo.length; i++) {
          this.colorList.push(color.get());
        }
      });
    }, (err)=> {
      console.error("Err: " + err);
      this.clientInfo = CLIENTINFO;

      this.setChartsColor(()=>{
        let color = new RColor;
        this.colorList = [];
        for(let i=0;i<this.clientInfo.length;i++){
          this.colorList.push(color.get());
        }
      });
    });
  }


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

  setCharts(){
    this.lineChartData = _.cloneDeep(this.lineChartDataTemplate);
    this.datas.forEach((value: Object,index,array)=>{
      this.lineChartData[value['clientNum']].data.push({x:value['time'],y:value['pm25']});
    });
    this.lineChartStandby = true;
    //if (this.chart && this.chart.chart && this.chart.chart.config) {
    //  setTimeout(()=> {
    //    this.chart.chart.config.colors = this.lineChartColors;
    //    //this.chart.chart.config.data.datasets = this.lineChartData;
    //    this.chart.chart.update();
    //  }, 5000);
    //}
  }


}
