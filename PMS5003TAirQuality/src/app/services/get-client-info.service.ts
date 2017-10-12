import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import '../../../node_modules/rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

import { CLIENTINFO } from 'assets/mock-clientInfo';

@Injectable()
export class GetClientInfoService {

  constructor(private http:Http) {
    this.clientInfo = CLIENTINFO;  //Use mock data
    this.getClientDataHttpWithPromise();
    this.getDataInterval = setInterval(() => {
      this.getClientDataHttpWithPromise();
    }, 61000);
  }

  public clientInfo:Array<any>;
  private getDataInterval: any;
  private dbURL = "assets/php/getClientInfo.php";

  ngOnDestroy() {
    clearInterval(this.getDataInterval);
  }


  public getClientDataHttpWithPromise(){
    //noinspection TypeScriptUnresolvedFunction
    return this.http.get(this.dbURL).toPromise().then((res:Response) => {
      let body = res.json();
      return body || {};
    }).then((dataIn)=> {
      //console.log(dataIn.toString());
      this.clientInfo = dataIn;
      return Promise.resolve(this.clientInfo);
    }).catch((err)=> {
      console.error("Err: Error getting client info." + err);
      this.clientInfo = CLIENTINFO;
      return Promise.resolve(this.clientInfo);
    });
  }
}
