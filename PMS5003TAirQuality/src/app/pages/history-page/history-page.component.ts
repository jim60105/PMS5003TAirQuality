import { Component, DoCheck  } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { DATA } from '../../mock-data';
import { arrayEqual } from '../../array-equal';
import { BsDaterangepickerComponent } from "../../bs-daterangepicker.component"

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent {

  constructor(private http:Http) {}

  datas:Object[] = [];
  public bsRangeValue = new BsDaterangepickerComponent();
  public bs:Date[]= this.bsRangeValue.getTimeByDate();

  ngOnInit() {
    this.datas = DATA;  //Use mock data
    this.getDataHttp();
  }

  ngDoCheck() {
    if(!arrayEqual(this.bs,this.bsRangeValue.getTimeByDate())) {
      this.bsRangeValue.setTimeByDate(this.bs[0],this.bs[1]);
      this.getDataHttp();
      //console.log('bsRangeValue change detect.');
    }
  }

  private dbURL = "php/getDBByTime.php";

  getDataHttp(){
    let params = new URLSearchParams();

    params.set('minDate', this.bsRangeValue.getSQLString()[0]);
    params.set('maxDate', this.bsRangeValue.getSQLString()[1]);
    //console.log(params);
    return this.http.get(this.dbURL, {search: params}).map((res:Response) => {
      let body = res.json();
      return body || {};
    }).subscribe((dataIn)=> {
      //console.log(dataIn.toString());
      this.datas = dataIn;
    }, (err)=> {
      console.error("Err: " + err);
    });
  }
}
