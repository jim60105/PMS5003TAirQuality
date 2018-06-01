import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import '../../../node_modules/rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

import * as moment from 'moment';
import { GetHttpTemplateService } from './get-http-template.service';
@Injectable()
export class GetHttpEdimaxService extends GetHttpTemplateService{

  public data;
  //url位置
  public useProxy = true;
  public url = "https://pm25.lass-net.org/data/last-all-airbox.json";
  //是否已設定查詢對象
  public isSetParam = true;
  public afterRequestSuccess(dataIn:any){
    let data;
    data = dataIn['feeds'];
    let tt;
    data.forEach((value,index,array)=>{
      //noinspection TypeScriptUnresolvedVariable
      tt = moment(value['timestamp']);
      //noinspection TypeScriptUnresolvedVariable
      value['time'] = tt.format('YYYY-MM-DD HH:mm:ss');
      value['temp'] = value['s_t0'];
      value['humid'] = value['s_h0'];
      value['pm1'] = value['s_d2'];
      value['pm25'] = value['s_d0'];
      value['pm10'] = value['s_d1'];
      value['device'] = value['odm'];
      value['app'] = value['type'];
      value['type'] = 'Edimax';
      value['name'] = '[Edimax]' + value['SiteName'];
    });
    return data;
  };
}
