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
import { MapPageComponent } from './pages/map-page/map-page.component';
import { AveragePageComponent } from './pages/average-page/average-page.component';
import { ComparePageComponent } from './pages/compare-page/compare-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { SettingPageComponent } from './pages/setting-page/setting-page.component';

import { DataTableComponent } from './data-table/data-table.component';
import { LoadingComponent } from './loading.component';
import { PortraitWarningComponent } from './portraitWarning.component';
import { LoginComponent } from './login/login.component';

import { GetDeviceService } from "./services/get-device.service";
import { GetDataService } from "./services/get-data.service";
import { GetSingleDataService } from './services/get-single-data.service';
import { GetLASSDataService } from "./services/get-lassdata.service";
import { GetSingleLASSDataService } from "./services/get-single-lassdata.service";
import { GetThingspeakDataService } from "./services/get-thingspeak-data.service";
import { LoginService } from "./services/login.service";
import { GetLassDeviceService } from "./services/get-lassdevice.service";
import { GetUserDeviceService } from "./services/get-user-device.service";
import { SetUserDeviceService } from "./services/set-user-device.service";
import { SetUserSettingsService } from "./services/set-user-settings.service";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MapPageComponent,
    HistoryPageComponent,
    DataTableComponent,
    Safe,
    AveragePageComponent,
    ComparePageComponent,
    LoadingComponent,
    PortraitWarningComponent,
    LoginComponent,
    SignupPageComponent,
    SettingPageComponent
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
    GetDeviceService,
    GetDataService,
    GetSingleDataService,
    GetLASSDataService,
    GetSingleLASSDataService,
    DaterangepickerConfig,
    LoginService,
    GetLassDeviceService,
    GetUserDeviceService,
    SetUserDeviceService,
    SetUserSettingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    //console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
