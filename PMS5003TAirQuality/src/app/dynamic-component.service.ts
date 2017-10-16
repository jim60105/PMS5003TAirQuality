import { Injectable } from '@angular/core';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { MapPageComponent } from './pages/map-page/map-page.component';
import { AveragePageComponent } from './pages/average-page/average-page.component';

@Injectable()
export class DynamicComponentService {
    private components = {
        MainPageComponent: MainPageComponent,
        MapPageComponent: MapPageComponent,
        HistoryPageComponent: HistoryPageComponent,
        AveragePageComponent: AveragePageComponent
    }
    constructor() { }

    getComponent(componentName) {
        return this.components[componentName];
    }
}