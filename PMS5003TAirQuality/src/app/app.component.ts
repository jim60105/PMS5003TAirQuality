import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { DynamicComponentService } from './dynamic-component.service';
import { DynamicComponentDirective } from './dynamic-component.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor(private dynamicComponentService: DynamicComponentService,
              private componentFactoryResolver: ComponentFactoryResolver) {  }

  @ViewChild(DynamicComponentDirective) componentHost: DynamicComponentDirective;

  selectedComponentName: string;
  navbarClass = ["disabled","","",""];

  //Run at start
  ngOnInit() {
    this.displayComponent('MainPageComponent');
    this.setNavbarActive(0);
  }

  displayComponent(componentName: string) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
        this.dynamicComponentService.getComponent(componentName));
    const viewContainerRef = this.componentHost.viewContainerRef;

    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
  }

  public setNavbarActive(component:number){
    for(let i=0;i<this.navbarClass.length;i++){
      this.navbarClass[i] = "";
    }
    this.navbarClass[component] = "active";
  }
}
