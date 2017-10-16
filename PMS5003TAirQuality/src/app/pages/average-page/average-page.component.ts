import { Component, ViewChild, AfterViewInit, Input } from '@angular/core';
import { URLSearchParams } from '@angular/http';

import { BsDaterangepickerComponent } from "../../bs-daterangepicker.component"

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
  @Input() tableVisible:boolean = true;
  constructor(private _getClientInfoService:GetClientInfoService,
              private _getDataService:GetDataService) {}
  public data:Object[] = [];
  public avgData:Object[] = [];
  public bsRangeValue = new BsDaterangepickerComponent();
  public bs:Date[]= this.bsRangeValue.getTimeByDate();

  public clientInfo:any = [];
  private colorList:Array<any> = [];
  public tableRowLimit:number = 3;

  ngOnInit() {
    this._getClientInfoService.getClientDataHttpWithPromise().then((res)=>{
      this.clientInfo = res;

      this.setChartsColor(()=>{
        let color = new RColor;
        this.colorList = [];
        for(let i=0;i<this.clientInfo.length;i++){
          this.colorList.push(color.get());
        }
      });
      this.tableRowLimit = this.clientInfo.length;
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
      this.data = res;
      let temp:Object[] = [];
      for(let i=0;i<this.clientInfo.length;i++){
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

      this.clientInfo.forEach((value,index,array)=>{
        temp[index]['clientNum'] = index;
      });
      temp.forEach((value,index,array)=>{
        Object.keys(value).forEach((key)=> {
          if(key!='count' && key!='clientNum') {
            temp[index][key] = Math.round((temp[index][key]/temp[index]['count'])*10000)/10000;
          }
        });
      });
      this.avgData = _.cloneDeep(temp);
      this.setCharts();
    });
  }

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

  setChartsColor(callback:Function){
    callback();
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

    this.clientInfo.forEach(function(value,index,array){
      barChartDataTemplate.push(
          {data: [], label: value['name']}
      );
    });

    this.barChartDataTemplate = _.cloneDeep(barChartDataTemplate);
    this.loadedBarChartDataTemplate = true;
    this.setCharts();

  }

  setCharts(){
    this.barChartData = _.cloneDeep(this.barChartDataTemplate);
    this.avgData.forEach((value: Object,index,array)=>{
      this.barChartData[value['clientNum']].data = [value['pm1'],value['pm25'],value['pm10'],value['humid'],value['temp']];
    });
    this.barChartStandby = true;
  }


}
