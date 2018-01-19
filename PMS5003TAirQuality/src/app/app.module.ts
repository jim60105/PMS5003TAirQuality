import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Routes, RouterModule, Router } from '@angular/router';
//Datepicker
import { Daterangepicker, DaterangepickerConfig } from 'ng2-daterangepicker';

//GoogleMap
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

//innerHtml Safer
import { Safe } from './safe-html.component';

//Charts
import { ChartsModule } from 'ng2-charts';

//Angular 2 Data Table Bootstrap 4
//https://www.npmjs.com/package/angular-4-data-table-fix
import { DataTableModule } from 'angular-4-data-table/src/index';

//Slider
import { MatSliderModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { MapComponent } from './pages/map-page/map/map.component';
import { MapPageComponent } from './pages/map-page/map-page.component';
import { AveragePageComponent } from './pages/average-page/average-page.component';
import { ComparePageComponent } from './pages/compare-page/compare-page.component';
import { LoginPageComponent } from './login/login.component';
import { DataTableComponent } from './data-table/data-table.component';
import { LoadingComponent } from './loading.component';


import { GetSingleDataService } from './services/get-single-data.service';
import { GetClientInfoService } from "./services/get-client-info.service";
import { GetDataService } from "./services/get-data.service";
import { GetThingspeakDataService } from "./services/get-thingspeak-data.service";
import { LoginService } from "./services/login.service";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MapPageComponent,
    HistoryPageComponent,
    DataTableComponent,
    MapComponent,
    Safe,
    AveragePageComponent,
    ComparePageComponent,
    LoadingComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
	NgbModule.forRoot(),
    BrowserAnimationsModule,
    MatSliderModule,

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDZMWcTgVoCqPDHMBGYpjRZ7stYsH7XZ-o'
    }),
    AgmSnazzyInfoWindowModule,

    DataTableModule,
    ChartsModule,
    Daterangepicker,
  ],
  providers: [
    GetSingleDataService,
    GetClientInfoService,
    GetDataService,
    DaterangepickerConfig,
    LoginService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
