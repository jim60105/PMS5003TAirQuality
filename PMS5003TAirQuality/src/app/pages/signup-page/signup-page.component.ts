import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Cookie } from 'ng2-cookies';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent{

  constructor(private http:HttpClient) { }

  ngOnInit() {
    if(Cookie.check("_e")){
      this._e = Cookie.get("_e");
    }
  }

  //資料
  public data:Array<any> = [];
  //php位置
  private dbURL = "assets/php/registration";
  public _e = "";
  public _p = "";
  public _p2 = "";

  public signUp(){

    let params = new HttpParams();
    params = params.set('_e', this._e);
    params = params.set('_p', this._p);

    this.signupHttpWithPromise(params).then((res)=>{
      if(res=='true'){
        //註冊成功
        alert("註冊成功，請重新登入");
        Cookie.set('_e', this._e);
        document.location.hash="#";
      }else if(res=='email'){
        alert("帳號已存在");
        this._e = this._p = this._p2 = "";
      }else if(res=='false'){
        alert("請重新檢查輸入資料!!");
        this._p = this._p2 = "";
      }else{
        console.warn("signUp Error:"+res.toString);
      }
    });
  }

  //獲取登入資料
  public signupHttpWithPromise(params:any = new HttpParams()){
    //noinspection TypeScriptUnresolvedFunction
    return this.http.post(this.dbURL,params,{
      observe: 'body',
      reportProgress:true,
      responseType: 'text'
    }).toPromise().then((dataIn:string)=> {
      //成功取得資料
      return Promise.resolve(dataIn);
    }).catch((err)=> {
      //失敗取得資料
      console.warn("Warn: Cannot login.");
      return Promise.resolve(err);
    });
  }
}
