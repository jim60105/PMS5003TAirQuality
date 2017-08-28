import { Component } from '@angular/core';

@Component({
    selector: 'map-page',
    templateUrl: './map-page.component.html',
    styleUrls: ['./map-page.component.css']
})
export class MapPageComponent {
    lat: number = 24.1791743;
    lng: number = 120.6014858;
    zoom: number = 15;
}