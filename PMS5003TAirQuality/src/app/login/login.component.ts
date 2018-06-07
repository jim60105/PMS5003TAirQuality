import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Cookie } from 'ng2-cookies';
import { LoginService } from "../services/login.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(private _loginService: LoginService) { }

  @Output() isCollapsedOut = new EventEmitter();
  public isLogin:boolean = false;
  private _e:string="";
  private _p:string="";
  public userCollapse = false;

  ngOnInit() {
    this.isLoginCheck();
    if(Cookie.check("_e")){
      this._e = Cookie.get("_e");
    }
  }

  public isLoginCheck(callback?){
    this.isLogin = (Cookie.check('_e') && Cookie.check('_p'));

    //如果在其他頁進行登入，則跳轉到首頁
    // if(this.isLogin && window.location.hash!='#'){
    //   window.location.hash='#';
    // }

    (callback && typeof(callback) === "function") && callback();
  }

  public login(){
    this._loginService.setParam(this._e,this._p);
    this._loginService.loginHttpWithPromise().then((res)=>{

      if(res[0]['_p']!==undefined) {
        this._p = "";
        this.isLoginCheck(()=>{
          //location.reload();

        });
      }else if(res[0]['_e']!==undefined){
        alert("密碼輸入錯誤!");
        Cookie.delete('_p');
        this._p = "";
      }else{
        alert("帳號不存在!");
        Cookie.set('_e', this._e);
        this._e = this._p = "";
        document.location.hash="#/signup";
        console.warn("Login Error:"+res.toString);
      }
    });
  }

  public logout(){
    this.isLogin = false;
    Cookie.delete('_e');
    Cookie.delete('_p');
    Cookie.delete('displayNearest');
    //location.reload();
    //如果在其他頁進行登出，則跳轉到首頁
    if(window.location.hash!='#'){
      window.location.hash='#';
    }
  }
}
