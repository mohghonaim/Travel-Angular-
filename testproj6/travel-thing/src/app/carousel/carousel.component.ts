import { Component, Input, OnInit, ViewChild, AfterViewInit, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, AfterViewInit {

  @Input() color='helloooo'
  @Input() myCarousel='x'
  @Input() myCarouselRef='#x'
  @Input() items2: string[][]=[['url', 'title']]
  // @ViewChild('circle') circleEle: ElementRef
  // str1 = new String( "#" ); 
  // #myCarousel
  // carouselId = this.str1.concat(this.myCarousel.toString());
  // OBSERVABLE?


//   carData = {
//     src: "https://cdn.carbuzz.com/gallery-images/840x560/923000/500/923527.jpg",
//     title: 'hi'
//  }

  // car1: carData
  // car1.src = "https://cdn.carbuzz.com/gallery-images/840x560/923000/500/923527.jpg"
  // car1.title: 'hi'

  items: string[][] = [["https://cdn.carbuzz.com/gallery-images/840x560/923000/500/923527.jpg", 'hi'],
  ["https://blog.dupontregistry.com/wp-content/uploads/2021/08/bugatti-chiron-super-sport-scaled.jpg", 'hi2'],
  ["https://gtspirit.com/wp-content/uploads/2021/06/02_hispeed_css-e1624431465349.jpg", 'hi3']]
  



  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // // Circle logic (fill colors, etc.)
    // console.log(this.circleEle);
    // if (this.circleEle) {
    //   this.circleEle.nativeElement.style.fill = this.color;
    // }
  }


}
