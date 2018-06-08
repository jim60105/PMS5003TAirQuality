import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

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
  public afterRequestSuccess(dataIn:any[]){
    let data;
    data = dataIn['feeds'];
    data.forEach((value,index,array)=>{
      value['time'] = yyyymmdd(new Date(value['timestamp']));
      value['temp'] = value['s_t0'];
      value['humid'] = value['s_h0'];
      value['pm1'] = value['s_d2'];
      value['pm25'] = value['s_d0'];
      value['pm10'] = value['s_d1'];
      value['device'] = value['app'];
      value['type'] = 'Edimax';
      value['name'] = '[Edimax]'+value['SiteName'];
    });
    return Promise.resolve(data);

    function yyyymmdd(date):string {
      return date.getFullYear()+'-'+
        (date.getMonth()>8 ? '' : '0') + (Number(date.getMonth()) + 1)+'-'+
        (date.getDate()>9 ? '' : '0') + date.getDate()+' '+
        (date.getHours()>9 ? '' : '0') + date.getHours()+':'+
        (date.getMinutes()>9 ? '' : '0') + date.getMinutes()+':'+
        (date.getSeconds()>9 ? '' : '0') + date.getSeconds();
    }
  };


}
