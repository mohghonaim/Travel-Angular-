import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-event-signup',
  templateUrl: './event-signup.component.html',
  styleUrls: ['./event-signup.component.css']
})
export class EventSignupComponent implements OnInit {


  id= ''
  constructor(private _Activatedroute: ActivatedRoute, 
    private router: Router, private _eventService: EventsService,
    private _authService: AuthService) {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false
   }


  
  sub:any
  a:any
  eventTitle = ''

  userFname = ''
  userLname = ''
  userEmail = ''

  ngOnInit(): void {

    this.sub = this._Activatedroute.paramMap.subscribe(params => {
      console.log(params.get('id')); 
      this.id = params.get('id') || '';
      
      //edany l id? walla esm l event?
      //event table
      //1: 
      //  name: film festival
      //  email:
      //    emails l nas l 3mla signup
      //2: concert
      
      });

      this._eventService.getEventData(this.id)
      .subscribe((response) => {
        //console.log(this.loginUserData.email)
        this.a = response;
        this.eventTitle = this.a['eventTitle']
      })

      this.userEmail = this._authService.loggedInEmail
      this.userFname = this._authService.loggedInFname
      this.userLname = this._authService.loggedInLname

      // this._eventService.registerEmailforEvent(this.id).subscribe(response => {console.log(response); console.log('response up');});

    // });
  }

  confirmEventReg(){
    this._eventService.registerEmailforEvent(this.id, this.userEmail)
    .subscribe(response => {console.log(response); console.log('response up');});
    this._authService.redirectHome()

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
