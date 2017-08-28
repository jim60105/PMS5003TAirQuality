import { Component } from '@angular/core';
import { Http, Response, RequestOptions  } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'main-page',
    templateUrl: './main-page.component.html',
})
export class MainPageComponent {
    constructor(private http:Http){}
    private dbURL = "php/getDB.php";

    getDataHttp():Observable<any>{
        return this.http.get(this.dbURL).map((res: Response) => {
            let body = res.json();
            return body || { };
        });
    }

    subscription = this.getDataHttp().subscribe((data)=>{
        console.log(data.toString());
    },(err)=>{
        console.error("Err: " + err);
    });
}
