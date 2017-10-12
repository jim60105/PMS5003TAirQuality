import { Component } from '@angular/core';
import { MapComponent } from './map/map.component';
import { GetRealTimeDataService } from "../../services/get-real-time-data.service";

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css'],
})
export class MapPageComponent {

  constructor(public _realTimeDataService:GetRealTimeDataService) {}

  public realTimeAirData = this._realTimeDataService.data;

}
