import { Component, OnInit } from '@angular/core';
import { DahabService } from '../dahab.service';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private _dahabService: DahabService, private _eventService: EventsService) { }

  // locTitle = 'Location'
  locCarouselId1 = 'x'
  locCarouselId1Ref='#x'
  locCarouselContnt: string[][]= [['url', 'title'], ['','']]

  locCarouselId2 = 'y'
  locCarouselId2Ref='#y'
  locCarouselContnt2: string[][]= [['url', 'title'], ['','']]


  a: any
  ngOnInit(): void {
    this._dahabService.getLocData(0)
    .subscribe((response) => {
      this.a = response;
      this.locCarouselContnt[0][0] = this.a['locCarouselContnt'][0]
      this.locCarouselContnt[0][1] = this.a['locTitle']
    })

    this._dahabService.getLocData(1).subscribe((response) => {
      this.a = response;
      this.locCarouselContnt[1][0] = this.a['locCarouselContnt'][0]
      this.locCarouselContnt[1][1] = this.a['locTitle']
    })

    this._eventService.getEventData(0)
      .subscribe((response) => {
        this.a = response;
        this.locCarouselContnt2[0][0] = this.a['eventBanner']
      this.locCarouselContnt2[0][1] = this.a['eventTitle']
      })

      this._eventService.getEventData(1)
      .subscribe((response) => {
        this.a = response;
        this.locCarouselContnt2[1][0] = this.a['eventBanner']
      this.locCarouselContnt2[1][1] = this.a['eventTitle']
      })
  }

  color1 = 'red'
  color2 = 'green'
  id1 = '1'
  id1ref = '#1'
  id2 = '2'
  id2ref = '#2'

  car1: string[][] = [["https://cdn.carbuzz.com/gallery-images/840x560/923000/500/923527.jpg", 'hi1'],
  ["https://blog.dupontregistry.com/wp-content/uploads/2021/08/bugatti-chiron-super-sport-scaled.jpg", 'hi2'],
  ["https://gtspirit.com/wp-content/uploads/2021/06/02_hispeed_css-e1624431465349.jpg", 'hi3']]

  car2: string[][] = [["https://cdn.carbuzz.com/gallery-images/840x560/923000/500/923527.jpg", 'hi2'],
  ["https://blog.dupontregistry.com/wp-content/uploads/2021/08/bugatti-chiron-super-sport-scaled.jpg", 'hi2'],
  ["https://gtspirit.com/wp-content/uploads/2021/06/02_hispeed_css-e1624431465349.jpg", 'hi3']]

  mapCoords2=[28.494915,34.512478]


}
