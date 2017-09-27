import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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

import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MapPageComponent } from './pages/map-page/map-page.component';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { RealTimePageComponent } from './pages/real-time-page/real-time-page.component';

//Charts
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MapPageComponent,
    HistoryPageComponent,
    RealTimePageComponent,
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

    DatepickerModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ChartsModule,
  ],
  entryComponents: [
    MainPageComponent,
    MapPageComponent,
    HistoryPageComponent,
    RealTimePageComponent,
  ],
  providers: [DynamicComponentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
