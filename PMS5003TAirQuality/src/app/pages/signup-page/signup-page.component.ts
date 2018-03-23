import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import '../../../../node_modules/rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

import { Cookie } from 'ng2-cookies';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent{

  constructor(private http:Http) { }

  ngOnInit() {
    if(Cookie.check("_e")){
      this._e = Cookie.get("_e");
    }
  }

  //資料
  public data:Array<any> = [];
  //php位置
  private dbURL = "assets/php/registration.php";
  private _e = "";
  private _p = "";
  private _p2 = "";

  public signUp(){
    let params = new URLSearchParams();
    params.set('_e', this._e);
    params.set('_p', this._p);

    this.signupHttpWithPromise(params).then((res)=>{
      if(res=='true'){
        //註冊成功
        alert("註冊成功，請重新登入");
        Cookie.set('_e', this._e);
        document.location.hash="#";
      }else if(res=='email'){
        alert("帳號已存在");
        this._e = this._p = this._p2 = "";
      }else{
        console.warn("signUp Error:"+res.toString);
      }
    });
  }

  //獲取登入資料
  public signupHttpWithPromise(params:any = new URLSearchParams()){
    //noinspection TypeScriptUnresolvedFunction
    return this.http.post(this.dbURL,params).toPromise().then((res:Response) => {
      let body = res.text();
      return body || {};
    }).then((dataIn)=> {
      //成功取得資料
      return Promise.resolve(dataIn);
    }).catch((err)=> {
      //失敗取得資料
      console.warn("Warn: Cannot login.");
      return Promise.resolve(err);
    });
  }
}
