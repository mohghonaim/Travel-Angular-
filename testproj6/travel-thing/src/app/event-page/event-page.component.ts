import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css']
})
export class EventPageComponent implements OnInit {

  eventTitle = 'Event'
  eventImg = ''
  eventDate = [0,0,0]
  eventLoc = ''

  //fi events page brdo



  // Cairo
  x = 30.024873
  y = 31.237229

  a: any

  id= ''
  constructor(private _Activatedroute: ActivatedRoute, 
    private _eventService: EventsService,
    private router: Router) {  
      this.router.routeReuseStrategy.shouldReuseRoute = () => false
   }


  
  sub:any
  locMapCoords: any

  ngOnInit(): void {

    this.sub = this._Activatedroute.paramMap.subscribe(params => {
      console.log(params.get('id')); 
      this.id = params.get('id') || '';
      if (this.id == '1'){
        this.locMapCoords=[31.199004,29.894378] //alex
      }
      else {
        this.locMapCoords=[30.024873,31.237229]
      }
      // let locData = this._dahabService.getLocData(params.get('id'));
      // console.log(locData)
      
      });

      console.log("hi ", this.id)
      this._eventService.getEventData(this.id)
      .subscribe((response) => {
        //console.log(this.loginUserData.email)
        this.a = response;
        console.log(this.a);
        Object.keys(this.a).forEach((key: any) => console.log(key + ":" + this.a[key]))
        this.eventTitle = this.a['eventTitle']
        this.eventDate[0] = this.a['eventDate'].day
        this.eventDate[1] = this.a['eventDate'].month
        this.eventDate[2] = this.a['eventDate'].year
        this.eventImg = this.a['eventBanner']
        this.eventLoc = this.a['eventLoc']
      
      })
    // });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }




}
