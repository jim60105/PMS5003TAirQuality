import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { URLSearchParams } from '@angular/http';

import { Cookie } from 'ng2-cookies';
import { LoginService } from "../services/login.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  //styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(private _loginService: LoginService) { }

  @Output() isLoginOut = new EventEmitter();
  public isLogin:boolean = false;
  public email:string = "";
  private _e:string="";
  private _p:string="";

  ngOnInit() {
    this.isLoginCheck();
  }

  //Cookie:id
  public isLoginCheck(){
    this.isLogin = (Cookie.check('_e') && Cookie.check('_p'))?(this.isLogin = true):(this.isLogin = false);
    this.email = this._e;
    this.isLoginOut.emit(this.isLogin);
  }

  public login(){
    let params = new URLSearchParams();
    params.set('_e', this._e);
    params.set('_p', this._p);
    params.set('type', '1');

    this._loginService.loginHttpWithPromise(params).then((res)=>{
      if(res['_p']!==undefined) {
        //正常登入
        Cookie.set('_e', res['_e']);
        Cookie.set('_p', res['_p']);
        this._p = "";
        this.isLoginCheck();
      }else if(res['_e']!==undefined){
        alert("密碼輸入錯誤!");
      }else{
        alert("帳號不存在!");
        console.warn("Login Error:"+res.toString);
      }
    });


  }
  public logout(){
    this.isLogin = false;
    Cookie.delete('_e');
    Cookie.delete('_p');
  }
}
