import { Component } from '@angular/core';
import { Http, Response, RequestOptions  } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { DATA } from '../../mock-data';
@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent{
  constructor(private http:Http){}

  datas: Object[]= [];
  maxDate: Date = new Date();
  minDate: Date = new Date();
  public bsValue: any ;
  public bsRangeValue: any = [ this.minDate, this.maxDate];
  ngOnInit() {
    //this.datas = DATA;
    this.minDate.setMonth(this.minDate.getMonth() - 2);
    this.bsRangeValue = [ this.minDate, this.maxDate];
  }
  private dbURL = "php/getDB.php";

  getDataHttp():Observable<any>{
    let params = new URLSearchParams();
    params.set('minDate', this.bsRangeValue[0].toISOString().slice(0, 19).replace('T', ' '));
    params.set('maxDate', this.bsRangeValue[1].toISOString().slice(0, 19).replace('T', ' '));
    return this.http.get(this.dbURL, { search: params }).map((res: Response) => {
      let body = res.json();
      return body || { };
    });
  }

  subscription = this.getDataHttp().subscribe((dataIn)=>{
    console.log(dataIn.toString());
    this.datas = dataIn;
  },(err)=>{
    console.error("Err: " + err);
  });
}
