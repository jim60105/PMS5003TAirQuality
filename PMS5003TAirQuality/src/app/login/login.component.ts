import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { URLSearchParams } from '@angular/http';

import { Cookie } from 'ng2-cookies';
import { LoginService } from "../services/login.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(private _loginService: LoginService) { }

  @Output() isLoginOut = new EventEmitter();
  public isLogin:boolean = false;
  private _e:string="";
  private _p:string="";

  ngOnInit() {
    this.isLoginCheck();
    if(Cookie.check("_e")){
      this._e = Cookie.get("_e");
    }
  }

  public isLoginCheck(callback?){
    this.isLogin = (Cookie.check('_e') && Cookie.check('_p'))?(this.isLogin = true):(this.isLogin = false);

    //如果在其他頁進行登入，則跳轉到首頁
    if(this.isLogin && window.location.hash!='#'){
      window.location.hash='#';
    }

    this.isLoginOut.emit(this.isLogin);
    (callback && typeof(callback) === "function") && callback();
  }

  public login(){
    let params = new URLSearchParams();
    params.set('_e', this._e);
    params.set('_p', this._p);

    this._loginService.loginHttpWithPromise(params).then((res)=>{
      if(res['_p']!==undefined) {
        //正常登入
        Cookie.set('_e', res['_e']);
        Cookie.set('_p', res['_p']);
        this._p = "";
        this.isLoginCheck(()=>{
          //location.reload();
        });
      }else if(res['_e']!==undefined){
        alert("密碼輸入錯誤!");
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
