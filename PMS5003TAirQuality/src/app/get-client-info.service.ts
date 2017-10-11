import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { CLIENTINFO } from 'assets/mock-clientInfo';

@Injectable()
export class GetClientInfoService {

  constructor(private http:Http) {
    this.clientInfo = CLIENTINFO;  //Use mock data
    this.getClientDataHttp();
    this.getDataInterval = setInterval(() => {
      this.getClientDataHttp();
    }, 61000);
  }

  public clientInfo:Object = {};
  private getDataInterval: any;
  private dbURL = "/assets/php/getClientInfo.php";

  ngOnDestroy() {
    clearInterval(this.getDataInterval);
  }


  public getClientDataHttp(){
    //noinspection TypeScriptUnresolvedFunction
    return this.http.get(this.dbURL).map((res:Response) => {
      let body = res.json();
      return body || {};
    }).subscribe((dataIn)=> {
      //console.log(dataIn.toString());
      this.clientInfo = dataIn;
    }, (err)=> {
      console.error("Err: " + err);
      this.clientInfo = CLIENTINFO;
    });
  }
}
