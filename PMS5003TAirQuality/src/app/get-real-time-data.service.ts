import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { realTimeDATA } from 'assets/mock-realTimeData';

@Injectable()
export class GetRealTimeDataService {

  constructor(private http:Http) {
    this.data = realTimeDATA;  //Use mock data
    this.getRealTimeAirDataHttp();
    this.getDataInterval = setInterval(() => {
      this.getRealTimeAirDataHttp();
    }, 61000);
  }

  private data:Object = {};
  private getDataInterval: any;
  private dbURL = "/assets/php/getDBRealTime.php";

  ngOnDestroy() {
    clearInterval(this.getDataInterval);
  }

  getRealTimeAirDataHttp(){
    //noinspection TypeScriptUnresolvedFunction
    return this.http.get(this.dbURL).map((res:Response) => {
      let body = res.json();
      return body || {};
    }).subscribe((dataIn)=> {
      this.data = {};
      dataIn.forEach((value,index,array)=>{
        this.data[value.clientNum] = value;
      });
    }, (err)=> {
      console.error("Err: " + err);
    });
  }

  getData(){
    return this.data;
  }


}
