import { Component, Input, OnInit } from '@angular/core';

import { Loader } from '@googlemaps/js-api-loader';
import { DahabService } from '../dahab.service';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private _dahabService: DahabService) { }

  @Input() mapCoords=[30.024873,31.237229]


  // sharm
  lat2 = 27.841991
  lng2 = 34.217642

  // dahab
  lat3 = 28.494915
  lng3 = 34.512478



  locMapCoordss = [30.024873,31.237229]

  map!: google.maps.Map

  ngOnInit(): void {

    this._dahabService.myObs.subscribe((val) => {
      console.log('hiooooo', val)
      this.locMapCoordss = val
      console.log(this.locMapCoordss)
      const location = { lat: this.locMapCoordss[0], lng: this.locMapCoordss[1] }
    })


    let loader = new Loader({
      apiKey: 'AIzaSyBtV1rgAInB1JDJ0L1GoI34PQebqWhHEH4',
    });
 
    loader.load().then(() => {
      console.log('loaded gmaps this bfeore?')
      console.log(this.mapCoords)
 
      // const location = { lat: this.lat2, lng: this.lng2 }
      const location = { lat: this.mapCoords[0], lng: this.mapCoords[1] }
      // const location = { lat: this.locMapCoordss[0], lng: this.locMapCoordss[1] }
 
      this.map = new google.maps.Map(<HTMLElement>document.getElementById("map"), {
        center: location,
        zoom: 6,
        // styles: styles
      })
 
      const marker = new google.maps.Marker({
        position: location,
        map: this.map,
      });
    })
  }

}
