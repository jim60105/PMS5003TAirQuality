import { Component } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { MapComponent } from './map/map.component';

import { realTimeDATA } from 'assets/mock-realTimeData';
@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css']
})
export class MapPageComponent {

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

  private dbURL = "/assets/php/getDBRealTime.php";

  getRealTimeAirDataHttp(){
    //noinspection TypeScriptUnresolvedFunction
    return this.http.get(this.dbURL).map((res:Response) => {
      let body = res.json();
      return body || {};
    }).subscribe((dataIn)=> {
      this.realTimeAirData = {};
      dataIn.forEach((value,index,array)=>{
        this.realTimeAirData[value.clientNum] = value;
      });
    }, (err)=> {
      console.error("Err: " + err);
    });
  }

}
