import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import '../../../node_modules/rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

import { DATA } from '../../assets/mock-data';

@Injectable()
export class GetDataService {

  constructor(private http:Http) {
    this.data = DATA;  //Use mock data
    this.getDataHttpWithPromise();
    this.getDataInterval = setInterval(() => {
      this.getDataHttpWithPromise();
    }, 61000);
  }

  public data:Array<any> = [];
  private getDataInterval: any;
  private dbURL = "assets/php/getDBByTime.php";

  ngOnDestroy() {
    clearInterval(this.getDataInterval);
  }

  public getDataHttpWithPromise(params:any = new URLSearchParams()){
    //noinspection TypeScriptUnresolvedFunction,TypeScriptValidateTypes
    return this.http.get(this.dbURL, {search: params}).toPromise().then((res:Response) => {
      let body = res.json();
      return body || {};
    }).then((dataIn)=> {
      this.data = dataIn;
      return Promise.resolve(this.data);
    }).catch((err)=> {
      console.warn("Err: Error getting airData.");
      this.data = DATA;  //Use mock data
      return Promise.resolve(this.data);
    });
  }
}
