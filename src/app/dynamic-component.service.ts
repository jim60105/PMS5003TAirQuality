import { Injectable } from '@angular/core';
import { MainPageComponent } from './main-page.component';
import { MapPageComponent } from './map-page.component';

@Injectable()
export class DynamicComponentService {
    private components = {
        MainPageComponent: MainPageComponent,
        MapPageComponent: MapPageComponent
    }
    constructor() { }

    getComponent(componentName) {
        return this.components[componentName];
    }
}