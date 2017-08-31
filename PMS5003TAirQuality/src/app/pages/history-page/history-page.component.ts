import { Component, DoCheck  } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


import { DATA } from '../../mock-data';
import { arrayEqual } from '../../array-equal';
import {bsDatepickerReducer} from "ngx-bootstrap/datepicker/reducer/bs-datepicker.reducer";

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent {

  constructor(private http:Http) {}

  datas:Object[] = [];
  maxDate:Date = new Date();
  tempDate:Date = new Date();
  minDate:Date = new Date(this.tempDate.setMonth(this.tempDate.getMonth() - 2));
  public bsValue:any;
  public bsRangeValue:any = [this.minDate, this.maxDate];

  ngOnInit() {
    //this.datas = DATA;  //Use mock data
  }

  private previousbsRangeValue = this.bsRangeValue;
  ngDoCheck() {
    if(!arrayEqual(this.bsRangeValue,this.previousbsRangeValue)) {
      this.previousbsRangeValue = this.bsRangeValue;
      this.getDataHttp();
      console.log('bsRangeValue change detect.');
    }
  }

  private dbURL = "php/getDB.php";

  getDataHttp(){
    let params = new URLSearchParams();
    params.set('minDate', this.bsRangeValue[0].toISOString().slice(0, 19).replace('T', ' '));
    params.set('maxDate', this.bsRangeValue[1].toISOString().slice(0, 19).replace('T', ' '));
    return this.http.get(this.dbURL, {search: params}).map((res:Response) => {
      let body = res.json();
      return body || {};
    }).subscribe((dataIn)=> {
      console.log(dataIn.toString());
      this.datas = dataIn;
    }, (err)=> {
      console.error("Err: " + err);
    });
  }
}
