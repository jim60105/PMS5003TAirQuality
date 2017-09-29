import { Component, DoCheck  } from '@angular/core';
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

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent {

  constructor(private http:Http) {}

  datas:Object[] = [];
  public bsRangeValue = new BsDaterangepickerComponent();
  public bs:Date[]= this.bsRangeValue.getTimeByDate();

  ngOnInit() {
    //Generate Radom Color
    this.getClientDataHttp();
    let color = new RColor;
    this.colorList = [];
    for(let i=0;i<this.clientInfo.length;i++){
      this.colorList.push(color.get());
    }
    this.setChartsColor(this.colorList);

    this.datas = DATA;  //Use mock data
    this.getDataHttp();
  }

  ngDoCheck() {
    if(!arrayEqual(this.bs,this.bsRangeValue.getTimeByDate())) {
      this.bsRangeValue.setTimeByDate(this.bs[0],this.bs[1]);
      this.getDataHttp();
      //console.log('bsRangeValue change detect.');
    }
  }

  private dbURL = "assets/php/getDBByTime.php";

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
      this.setCharts();
    }, (err)=> {
      console.error("Err: " + err);
      this.setCharts();
    });
  }


  private clientInfo:Array<any> = [];
  getClientDataHttp(){
    //noinspection TypeScriptUnresolvedFunction
    return this.http.get("assets/php/getClientInfo.php").map((res:Response) => {
      let body = res.json();
      return body || {};
    }).subscribe((dataIn)=> {
      //console.log(dataIn.toString());
      this.clientInfo = [];
      this.clientInfo = dataIn;
      this.setLineChartDataTemplate();
    }, (err)=> {
      console.error("Err: " + err);
      this.clientInfo = CLIENTINFO;
      this.setLineChartDataTemplate();
    });
  }

  private colorList:Array<any> = [];


  // lineChart
  private lineChartDataTemplate:Array<any> = [{data: [], label: '',fill:false}];
  public lineChartData = _.cloneDeep(this.lineChartDataTemplate);
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
  public lineChartColors:Array<any> = [];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  // events
  //public chartClicked(e:any):void {
  //  console.log(e);
  //}

  //public chartHovered(e:any):void {
  //  console.log(e);
  //}

  setCharts(){
    let lineChartData = _.cloneDeep(this.lineChartDataTemplate);
    this.datas.forEach(function(value: Object,index,array){
      lineChartData[value['clientNum']].data.push({x:value['time'],y:value['pm25']});
    });
    this.lineChartData = _.cloneDeep(lineChartData);
  }

  setChartsColor(colorList?:Array<any>){
    if(!colorList){
      colorList = this.colorList;
    }

    let lineChartColors = [];
    colorList.forEach(function(value,index,array){
      lineChartColors.push({
        backgroundColor: `rgba(${value[0]},${value[1]},${value[2]},0.2)`,
        borderColor: `rgba(${value[0]},${value[1]},${value[2]},1)`,
        pointBackgroundColor: `rgba(${value[0]},${value[1]},${value[2]},1)`,
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: `rgba(${value[0]},${value[1]},${value[2]},1)`
      });
    });
    this.lineChartColors = _.cloneDeep(lineChartColors);
  }

  setLineChartDataTemplate(){
    let lineChartDataTemplate:Array<any> = [];

    this.clientInfo.forEach(function(value,index,array){
      lineChartDataTemplate.push(
          {data: [], label: value['name'],fill:false}
      );
    });

    this.lineChartDataTemplate = _.cloneDeep(lineChartDataTemplate);
    this.setCharts();
  }
}
