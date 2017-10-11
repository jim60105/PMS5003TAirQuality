import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Datepicker
import { DatepickerModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

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

import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { HistoryTableComponent } from './pages/history-page/history-table/history-table.component';
import { MapComponent } from './pages/map-page/map/map.component';
import { MapPageComponent } from './pages/map-page/map-page.component';

import { GetRealTimeDataService } from './get-real-time-data.service';
import { GetClientInfoService } from "./get-client-info.service";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MapPageComponent,
    HistoryPageComponent,
    HistoryTableComponent,
    MapComponent,
    Safe,
    DynamicComponentDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpModule,
	NgbModule.forRoot(),

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDZMWcTgVoCqPDHMBGYpjRZ7stYsH7XZ-o'
    }),
    AgmSnazzyInfoWindowModule,

    DataTableModule,
    DatepickerModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ChartsModule,
  ],
  entryComponents: [
    MainPageComponent,
    MapPageComponent,
    HistoryPageComponent,
  ],
  providers: [DynamicComponentService, GetRealTimeDataService, GetClientInfoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
