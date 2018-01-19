import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { URLSearchParams } from '@angular/http';

import { Cookie } from 'ng2-cookies';
import { LoginService } from "../services/login.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  //styleUrls: ['./login.component.css']
})
export class LoginPageComponent{

  constructor(private _loginService: LoginService) { }

  @Output() isLoginOut = new EventEmitter();
  public isLogin:boolean = false;
  private _e:string="";
  private _p:string="";

  ngOnInit() {
    this.isLoginCheck();
  }

  //Cookie:id
  public isLoginCheck(){
    this.isLogin = (Cookie.check('_e') && Cookie.check('_p'))?(this.isLogin = true):(this.isLogin = false);

    this.isLoginOut.emit(this.isLogin);
  }

  public login(){
    let params = new URLSearchParams();
    params.set('_e', this._e);
    params.set('_p', this._p);

    this._loginService.loginHttpWithPromise(params).then((res)=>{
      if(res['_p']!==undefined){
        //正常登入
        Cookie.set('_e',res['_e']);
        Cookie.set('_p',res['_p']);
        this._p = "";
        this.isLoginCheck();
      }else{
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
