import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import '../../../node_modules/rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

import { realTimeDATA } from 'assets/mock-realTimeData';

@Injectable()
export class GetRealTimeDataService {

  constructor(private http:Http) {
    this.data = realTimeDATA;  //Use mock data
    this.getRealTimeAirDataHttpWithPromise();
    this.getDataInterval = setInterval(() => {
      this.getRealTimeAirDataHttpWithPromise();
    }, 61000);
  }

  public data:Array<any> = [];
  private getDataInterval: any;
  private dbURL = "assets/php/getDBRealTime.php";

  ngOnDestroy() {
    clearInterval(this.getDataInterval);
  }

  public getRealTimeAirDataHttpWithPromise(){
    //noinspection TypeScriptUnresolvedFunction
    return this.http.get(this.dbURL).toPromise().then((res:Response) => {
      let body = res.json();
      return body || {};
    }).then((dataIn)=> {
      this.data.length = 0;
      dataIn.forEach((value,index,array)=>{
        this.data[value.clientNum] = value;
      });
      return Promise.resolve(this.data);
    }).catch((err)=> {
      console.warn("Err: Error getting real time data.");
      this.data = realTimeDATA;  //Use mock data
      return Promise.resolve(this.data);
    });
  }
}
