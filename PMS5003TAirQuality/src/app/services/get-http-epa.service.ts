import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import '../../../node_modules/rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

import * as moment from 'moment';
import { GetHttpTemplateService } from './get-http-template.service';
@Injectable()
export class GetHttpEpaService extends GetHttpTemplateService{
  //url位置
  public url = "https://pm25.lass-net.org/data/last-all-epa.json";
  //是否已設定查詢對象
  public isSetParam = true;

  //設定查詢對象
  public setParam(){ };

  public afterRequestSuccess(dataIn:Object){
      this.data = dataIn['feeds'];
      this.data.forEach((value,index,array)=>{
        value['time'] = value['date']+' '+value['time'];
        //noinspection TypeScriptUnresolvedVariable
        let tt = moment(value['timestamp']);
        //noinspection TypeScriptUnresolvedVariable
        value['time'] = tt.format('YYYY-MM-DD HH:mm:ss');
        value['temp'] = value['s_t0'];
        value['humid'] = value['s_h0'];
        value['pm1'] = value['s_d2'];
        value['pm25'] = value['s_d0'];
        value['pm10'] = value['s_d1'];
        value['device'] = value['odm'];
        value['app'] = value['type'];
      });

    return Promise.resolve(this.data);
  };
}
