import { Component } from '@angular/core';
import { URLSearchParams } from '@angular/http';

declare var RColor:any;
import * as moment from 'moment';
//noinspection TypeScriptCheckImport
import * as _ from "lodash";
import { DaterangepickerComponent } from "../../daterangepicker.component"
import { Daterangepicker, DaterangepickerConfig } from 'ng2-daterangepicker';
import { GetClientInfoService } from "../../services/get-client-info.service";
import { GetDataService } from "../../services/get-data.service";
@Component({
  selector: 'app-compare-page',
  templateUrl: './compare-page.component.html',
  styleUrls: ['./compare-page.component.css']
})
export class ComparePageComponent{

  constructor(private _getClientInfoService:GetClientInfoService,
              private _getDataService:GetDataService,
              private daterangepickerOptions: DaterangepickerConfig) {}

  public _DaterangepickerComponent = new DaterangepickerComponent();
  private uniqueDateRangepickerComponentArray;
  public ready = false;//Submit Btn disable
  private overBound = false;
  public errDate:boolean[] = [true,true];
  public clientInfo;
  public duration:number = 6;
  public client:number = -1;
  public data:Object[] = [];
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
          tooltipFormat: 'DD HH:mm:ss'
        }
      }]
    },
    elements:{
      point:{
        radius: 0,
        hitRadius: 4,
        hoverRadius: 4
      }
    },
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

    this._getClientInfoService.getClientDataHttpWithPromise().then((res)=>{
      this.clientInfo = res;
      this.setChartsColor();

    });
  }

//form處理
  public addDateRangepickerComponentArray(){
    this.errDate.push(true);
    this.dateRangepickerComponentArray.push(new DaterangepickerComponent(moment().subtract(this.duration,'day').startOf('day'),moment()));
    this.setLineChartDataTemplate();
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
    this.uniqueDateRangepickerComponentArray = _.uniqBy(this.dateRangepickerComponentArray,
        (e)=>{
          if(e.rangeValue[0]>=this.daterangepickerOptions.settings.maxDate && !e.rangeValue[0]<=this.daterangepickerOptions.settings.minDate) {
            this.overBound = true;
            this.errDate.push(false);
          }else{
            this.errDate.push(true);
          }
          return e.rangeValue[0].toISOString();
        });
    if(this.uniqueDateRangepickerComponentArray.length>1  && !this.overBound){
      this.ready = true;
    }else{
      this.ready = false;
    }
  }

  private submit(){
    //console.log(this.uniqueDateRangepickerComponentArray);
    if(this.ready){
      this.loading = true;
      this.lineChartStandby = false;
      for(let i =0;i<this.uniqueDateRangepickerComponentArray.length;i++){
        this.getDataHttp(this.uniqueDateRangepickerComponentArray[i],i);
      }
    }
  }

  //chart處理
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

  //獲取空汙資料
  public getDataHttp(arr,i){
    let params = new URLSearchParams();

    params.set('minDate', arr.getSQLString()[0]);
    params.set('maxDate', arr.getSQLString()[1]);
    params.set('client', this.client.toString());

    this._getDataService.getDataHttpWithPromise(params).then((res)=>{
      this.data[i] = res;
      if(this.data.length==this.uniqueDateRangepickerComponentArray.length){
        let interval = setInterval(() => {
          if(this.loadedLineChartDataTemplate){
            clearInterval(interval);
            this.setCharts();
          }
        }, 400);
      }
    });
  }

  public setCharts(){
    let tmp = _.cloneDeep(this.lineChartDataTemplate);
    this.data.forEach((d:Object[], i, array)=> {
      let base = this.dateRangepickerComponentArray[i].rangeValue[0];
      tmp[i].label = `數據${i}`;
      d.forEach((value:Object, index, array)=> {
        let tmp2 = moment.utc(moment(value['time']).valueOf() - base.valueOf());
        tmp[i].data.push({x: tmp2.format('YYYY-MM-DD HH:mm:ss'), y: value[this.dataSet]});
      });
    });
    this.lineChartData = _.cloneDeep(tmp);
    this.lineChartStandby = false;
    this.lineChartStandby = true;
    this.loading = false;
  }
}
