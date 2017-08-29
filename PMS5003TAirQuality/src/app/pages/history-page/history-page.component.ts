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

  datas: any;
  ngOnInit() {
    this.datas = DATA;
  }

  /*
   private dbURL = "http://localhost/php/getDB.php";

   getDataHttp():Observable<any>{
   return this.http.get(this.dbURL).map((res: Response) => {
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
   */

}
