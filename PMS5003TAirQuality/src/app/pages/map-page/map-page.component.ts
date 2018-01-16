import { Component } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { MapComponent } from './map/map.component';
import { GetSingleDataService } from "../../services/get-single-data.service";

//noinspection TypeScriptCheckImport
import * as _ from "lodash";
@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css'],
})
export class MapPageComponent {

  constructor(public _realTimeDataService:GetSingleDataService) {}

  ngOnInit(){

    let params = new URLSearchParams();
    //TODO
    //params.set('time', '2017-11-05 11:04:00');

    this._realTimeDataService.getSingleDataHttpWithPromise(params).then((res)=>{
      this.airData = _.cloneDeep(res);
    });
  }

  public airData;

}
