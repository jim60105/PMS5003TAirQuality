import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page.component';
import { MapPageComponent } from './map-page.component';
import { DynamicComponentService } from './dynamic-component.service';
import { DynamicComponentDirective } from './dynamic-component.directive';

//GoogleMap
import { AgmCoreModule } from '@agm/core';

//innerHtml Safer
import { Safe } from './safe-html.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MapPageComponent,
    Safe,
    DynamicComponentDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDZMWcTgVoCqPDHMBGYpjRZ7stYsH7XZ-o'
    }),
  ],
  entryComponents: [
    MainPageComponent,
    MapPageComponent
  ],
  providers: [DynamicComponentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
