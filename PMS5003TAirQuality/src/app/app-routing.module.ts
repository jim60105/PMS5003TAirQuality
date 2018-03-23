import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { MapPageComponent } from './pages/map-page/map-page.component';
import { AveragePageComponent } from './pages/average-page/average-page.component';
import { ComparePageComponent } from './pages/compare-page/compare-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { SettingPageComponent } from './pages/setting-page/setting-page.component';

import {HashLocationStrategy, LocationStrategy} from '@angular/common';

import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

const routes: Routes = <Routes>[
  {path: '', children: [
    {path: 'setting', component: SettingPageComponent},
    {path: 'signup', component: SignupPageComponent},
    {path: 'history', component: HistoryPageComponent},
    {path: 'map', component: MapPageComponent},
    //{path: 'average', component: AveragePageComponent},
    //{path: 'compare', component: ComparePageComponent},
    {path: '', component: MainPageComponent},
    {path: '**', redirectTo:''}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash: true,
    //enableTracing: true, // <-- debugging purposes only
    preloadingStrategy: SelectivePreloadingStrategy,
  })],
  exports: [RouterModule],
  providers: [
    SelectivePreloadingStrategy
  ]

})
export class AppRoutingModule { }
