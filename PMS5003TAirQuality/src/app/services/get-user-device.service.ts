import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import '../../../node_modules/rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

import { Cookie } from 'ng2-cookies';

@Injectable()
export class GetUserDeviceService {
  constructor(private http:Http) {
  }

  //資料
  public data:Array<any> = [];
  //php位置
  private dbURL = "assets/php/getUserDevices.php";

  //獲取登入資料
  public getUserDevicesHttpWithPromise(){
    let params:any = new URLSearchParams();

    params.set('_e', Cookie.get('_e'));
    params.set('_p', Cookie.get('_p'));
    //noinspection TypeScriptUnresolvedFunction
    return this.http.post(this.dbURL,params).toPromise().then((res:Response) => {
      let body = res.json();
      return body || {};
    }).then((dataIn)=> {
      //成功取得資料
      this.data = [];
      dataIn.forEach((value)=>{
        if(typeof value.device_id==='undefined'){
          Cookie.set('displayNearest',value);
        }else {
          this.data.push(value.device_id);
        }
      });
      return Promise.resolve(this.data);
    }).catch((err)=> {
      //失敗取得資料
      console.warn("Warn: Cannot get user devices.");
      return Promise.resolve(this.data);
    });
  }
}
