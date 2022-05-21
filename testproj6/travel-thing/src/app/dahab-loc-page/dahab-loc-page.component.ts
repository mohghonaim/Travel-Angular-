import { Component, OnInit } from '@angular/core';
import { DahabService } from '../dahab.service';

@Component({
  selector: 'app-dahab-loc-page',
  templateUrl: './dahab-loc-page.component.html',
  styleUrls: ['./dahab-loc-page.component.css']
})
export class DahabLocPageComponent implements OnInit {

  // constructor(private dahabService: DahabService) { }

  constructor() { }

  ngOnInit(): void {
  }


  
  title = 'Dahab'

  dahabCarouselId = 'dahabCarousel'
  dahabCarouselIdRef = '#dahabCarousel'

  dahabCarouselContnt: string[][] = [["https://cdn.carbuzz.com/gallery-images/840x560/923000/500/923527.jpg", 'dahab'],
  ["https://blog.dupontregistry.com/wp-content/uploads/2021/08/bugatti-chiron-super-sport-scaled.jpg", 'hi2'],
  ["https://gtspirit.com/wp-content/uploads/2021/06/02_hispeed_css-e1624431465349.jpg", 'hi3']]

  dahabTempTable: string[][] = [['100', '101', '102'], ['103', '104', '105']]

  dahabMapCoords=[28.494915,34.512478]

}
