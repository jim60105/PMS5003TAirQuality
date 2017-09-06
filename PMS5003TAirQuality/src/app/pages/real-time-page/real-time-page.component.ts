import { Component } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
//import { Observable } from 'rxjs/Observable';

import { MapPageComponent } from '../map-page/map-page.component';

import { realTimeDATA } from '../../mock-realTimeData';
@Component({
  selector: 'app-real-time-page',
  templateUrl: './real-time-page.component.html',
  styleUrls: ['./real-time-page.component.css']
})
export class RealTimePageComponent {

  constructor(private http:Http) {}

  realTimeAirData:Object = {};

  getDataInterval: any;

  ngOnInit() {
    this.realTimeAirData = realTimeDATA;  //Use mock data
    this.getRealTimeAirDataHttp();
    this.getDataInterval = setInterval(() => {
      this.getRealTimeAirDataHttp();
    }, 61000);
  }

  ngOnDestroy() {
    clearInterval(this.getDataInterval);
  }

  private dbURL = "php/getDBRealTime.php";

  getRealTimeAirDataHttp(){
    return this.http.get(this.dbURL).map((res:Response) => {
      let body = res.json();
      return body || {};
    }).subscribe((dataIn)=> {
      dataIn.forEach((value,index,array)=>{
        this.realTimeAirData = {};
        this.realTimeAirData[value.clientNum] = value;
      });
    }, (err)=> {
      console.error("Err: " + err);
    });
  }

}
