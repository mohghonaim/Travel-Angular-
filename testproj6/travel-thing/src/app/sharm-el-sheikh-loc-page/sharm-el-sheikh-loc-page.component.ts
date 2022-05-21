import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sharm-el-sheikh-loc-page',
  templateUrl: './sharm-el-sheikh-loc-page.component.html',
  styleUrls: ['./sharm-el-sheikh-loc-page.component.css']
})
export class SharmElSheikhLocPageComponent implements OnInit {

  constructor(route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  title = 'Sharm El-Sheikh'

  sharmCarouselId = 'sharmCarousel'
  sharmCarouselIdRef = '#sharmCarousel'

  sharmCarouselContnt: string[][] = [["https://cdn.carbuzz.com/gallery-images/840x560/923000/500/923527.jpg", 'sharm el sheikh'],
  ["https://blog.dupontregistry.com/wp-content/uploads/2021/08/bugatti-chiron-super-sport-scaled.jpg", 'hi2'],
  ["https://gtspirit.com/wp-content/uploads/2021/06/02_hispeed_css-e1624431465349.jpg", 'hi3']]

  sharmTempTable: string[][] = [['20', '21', '23'], ['29', '28', '27']]

  sharmMapCoords=[27.841991,34.217642]

  // dahab
  lat3 = 28.494915
  lng3 = 34.512478

}
