import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Datepicker
import { Daterangepicker, DaterangepickerConfig } from 'ng2-daterangepicker';

//GoogleMap
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

//innerHtml Safer
import { Safe } from './safe-html.component';

//Dynamic Change Component
import { DynamicComponentService } from './dynamic-component.service';
import { DynamicComponentDirective } from './dynamic-component.directive';

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
import { DataTableComponent } from './data-table/data-table.component';
import { LoadingComponent } from './loading.component';

import { GetSingleDataService } from './services/get-single-data.service';
import { GetClientInfoService } from "./services/get-client-info.service";
import { GetDataService } from "./services/get-data.service";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MapPageComponent,
    HistoryPageComponent,
    DataTableComponent,
    MapComponent,
    Safe,
    DynamicComponentDirective,
    AveragePageComponent,
    ComparePageComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
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
  entryComponents: [
    MainPageComponent,
    MapPageComponent,
    HistoryPageComponent,
    AveragePageComponent,
    ComparePageComponent
  ],
  providers: [
    DynamicComponentService,
    GetSingleDataService,
    GetClientInfoService,
    GetDataService,
    DaterangepickerConfig,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
