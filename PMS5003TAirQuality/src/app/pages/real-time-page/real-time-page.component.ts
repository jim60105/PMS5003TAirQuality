import { Component } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { MapPageComponent } from '../map-page/map-page.component';

import { DATA } from '../../mock-data';
import { arrayEqual } from '../../array-equal';
@Component({
  selector: 'app-real-time-page',
  templateUrl: './real-time-page.component.html',
  styleUrls: ['./real-time-page.component.css']
})
export class RealTimePageComponent {

  constructor(private http:Http) {}

  realTimeAirData:Object[] = [];

  ngOnInit() {
    this.realTimeAirData = DATA;  //Use mock data
    this.getRealTimeAirDataHttp();
  }

  private dbURL = "php/getDB.php";

  getRealTimeAirDataHttp(){
    let params = new URLSearchParams();

    let toDay:Date = new Date();
    let toDayString:string = toDay.toISOString().slice(0, 19).replace('T', ' ');
    params.set('minDate', toDayString);
    params.set('maxDate', toDayString);
    return this.http.get(this.dbURL, {search: params}).map((res:Response) => {
      let body = res.json();
      return body || {};
    }).subscribe((dataIn)=> {
      //TODO Get last data

    }, (err)=> {
      console.error("Err: " + err);
    });
  }

}
