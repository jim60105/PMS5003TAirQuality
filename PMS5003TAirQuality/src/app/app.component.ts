import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor(private router: Router){}
  isCollapsed = true;
  navbarClass = ["","","",""];
  private tempLoc = window.location.hash;
  routeNum = {
    "" : 0,
    "#/" : 0,
    "#/map" : 1,
    "#/history" : 2,
    "#/average" : 3,
    "#/compare" : 4
  };

  public loading;
  public isLogin = false;

  ngOnInit() {
    this.setNavbarActive(this.routeNum[window.location.hash]);
  }

  ngDoCheck() {
    if(this.tempLoc!=window.location.hash){
      this.tempLoc = window.location.hash;
      this.setNavbarActive(this.routeNum[window.location.hash]);
    }
  }

  public setNavbarActive(component:number){
    this.isCollapsed=true;
    for(let i=0;i<this.navbarClass.length;i++){
      this.navbarClass[i] = "";
    }
    this.navbarClass[component] = "active";
  }

}
