import { Component, DoCheck  } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { DATA } from '../../mock-data';
import { arrayEqual } from '../../array-equal';
import { BsDaterangepickerComponent } from "../../bs-daterangepicker.component"
import * as _ from "lodash";

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
    this.datas = DATA;  //Use mock data
    this.setCharts();
    this.getDataHttp();
  }

  ngDoCheck() {
    if(!arrayEqual(this.bs,this.bsRangeValue.getTimeByDate())) {
      this.bsRangeValue.setTimeByDate(this.bs[0],this.bs[1]);
      this.getDataHttp();
      //console.log('bsRangeValue change detect.');
    }
  }

  private dbURL = "php/getDBByTime.php";

  getDataHttp(){
    let params = new URLSearchParams();

    params.set('minDate', this.bsRangeValue.getSQLString()[0]);
    params.set('maxDate', this.bsRangeValue.getSQLString()[1]);
    //console.log(params);
    return this.http.get(this.dbURL, {search: params}).map((res:Response) => {
      let body = res.json();
      return body || {};
    }).subscribe((dataIn)=> {
      //console.log(dataIn.toString());
      this.datas = dataIn;
      this.setCharts();
    }, (err)=> {
      console.error("Err: " + err);
    });
  }

  // lineChart
  private lineChartDataTemplate:Array<any> = [
    {data: [], label: 'Client 0'},
    {data: [], label: 'Client 1'},
    {data: [], label: 'Client 2'}
  ];
  public lineChartData = _.cloneDeep(this.lineChartDataTemplate);

  public lineChartLabels:Array<any> = [];
  public lineChartOptions:any = {
    responsive: true,
    scales: {
      xAxes: [{
        type: 'time',
        distribution: 'linear'
      }]
    }

  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
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

}
