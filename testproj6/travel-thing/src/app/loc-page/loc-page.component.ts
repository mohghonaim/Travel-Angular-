import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { DahabService } from '../dahab.service';


@Component({
  selector: 'app-loc-page',
  templateUrl: './loc-page.component.html',
  styleUrls: ['./loc-page.component.css']
})
export class LocPageComponent implements OnInit {

  @Input() title='Location'
  @Input() myCarousel='x'
  @Input() myCarouselRef='#x'
  @Input() myCarouselContnt: string[][]=[['url', 'title']]

  @Input() myTempTable: string[][]=[['t1', 't2', 't3']]

  @Input() myMapCoords=[30.024873,31.237229]


  mapCrds = new Subject<any>()
  isLoggedIn(): Observable<any> {
    return this.mapCrds.asObservable();
  }
  // mapCrds.next('hi')

  private myarray: number[] = [30.024873, 31.237229]
  strings$: Observable<number[]> = of(this.myarray);
  
  mpCrds = new Subject<number>();
  getMpCrds(): Observable<number> {
    return this.mpCrds.asObservable();
  }
  maaapCrds = this.getMpCrds()
  


  x = 30.024873
  y = 31.237229
  locTitle = 'Location'
  locCarouselId = 'x'
  locCarouselIdRef='#x'
  locCarouselContnt: string[][]= [['url', 'title'], ['',''], ['','']]
  locTempTable: string[][]=[['Winter', 'Spring', 'Summer', 'Fall'], []]
  locMapCoords=[this.x,this.y]

  locMapCoordss=[1,1]

  a: any

  id= ''
  constructor(private _Activatedroute: ActivatedRoute, 
    private _dahabService: DahabService,
    private router: Router) {  
      this.router.routeReuseStrategy.shouldReuseRoute = () => false
   }


  myObs = new Subject<number[]>()

  sub:any

  ngOnInit(): void {
    this.myObs.subscribe((val) => {
      console.log('hio', val)
      this.locMapCoordss = val
      console.log(this.locMapCoordss)
    })



    this.sub = this._Activatedroute.paramMap.subscribe(params => {
      console.log(params.get('id')); 
      this.id = params.get('id') || '';
      if (this.id == '1'){
        console.log('hellloooooooooooooo')
        this.locMapCoords=[28.494915,34.512478]
      }
      else {
        this.locMapCoords=[27.841991,34.217642]
      }
      // let locData = this._dahabService.getLocData(params.get('id'));
      // console.log(locData)
      
      });
      this._dahabService.getLocData2(this.id)

      console.log("hi ", this.id)
      this._dahabService.getLocData(this.id)
      .subscribe((response) => {
        //console.log(this.loginUserData.email)
        this.a = response;
        console.log(this.a);
        Object.keys(this.a).forEach((key: any) => console.log(key + ":" + this.a[key]))
        this.locTitle = this.a['locTitle']
        console.log(this.locTitle)
        this.locCarouselId = this.a['locCarouselId']
        this.locCarouselIdRef = this.a['locCarouselIdRef']


        // this.x = this.a['locMapCoords'][0]
        // this.y = this.a['locMapCoords'][1]
        // this.locMapCoords[0] = this.a['locMapCoords'][0]
        // this.locMapCoords[1] = this.a['locMapCoords'][1]
        
        // console.log('what is wrong',this.locMapCoords)
        // this.mpCrds.next(5)
        
        // console.log(this.locMapCoords[0], this.locMapCoords[1])
        this.locTempTable[1][0] = this.a['locTempTable'][0]
        this.locTempTable[1][1] = this.a['locTempTable'][1]
        this.locTempTable[1][2] = this.a['locTempTable'][2]
        this.locTempTable[1][3] = this.a['locTempTable'][3]
        console.log("locTempTableee:", this.locTempTable)
        this.locCarouselContnt[0][0] = this.a['locCarouselContnt'][0]
        this.locCarouselContnt[1][0] = this.a['locCarouselContnt'][1]
        this.locCarouselContnt[2][0] = this.a['locCarouselContnt'][2]
        this.locCarouselContnt[0][1] = this.a['locTitle']
        this.locCarouselContnt[1][1] = this.a['locTitle']
        this.locCarouselContnt[2][1] = this.a['locTitle']
        console.log(this.locCarouselContnt)
        // this.myObs.next([10101])
        // this.myObs.next(this.locMapCoords)
        // this.mpCrds.next([30.024873, 31.237229])
        
      
      })
    // });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


  id3 = '3'
  id3ref = '#3'

  car3: string[][] = [["https://cdn.carbuzz.com/gallery-images/840x560/923000/500/923527.jpg", 'hi loc'],
  ["https://blog.dupontregistry.com/wp-content/uploads/2021/08/bugatti-chiron-super-sport-scaled.jpg", 'hi2'],
  ["https://gtspirit.com/wp-content/uploads/2021/06/02_hispeed_css-e1624431465349.jpg", 'hi3']]

  tempTable: string[][] = [['20', '21', '23'], ['29', '28', '27']]

  mapCoords=[27.841991,34.217642]

  mapCoords2=[28.494915,34.512478]


  // sharm
  lat2 = 27.841991
  lng2 = 34.217642

  // dahab
  lat3 = 28.494915
  lng3 = 34.512478


}
