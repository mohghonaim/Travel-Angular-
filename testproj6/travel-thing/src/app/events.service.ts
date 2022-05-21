import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private _abcFilmFestivalUrl = "https://anglr-travel-default-rtdb.firebaseio.com/filmFestivalData.json"
  private _abcConcertUrl = "https://anglr-travel-default-rtdb.firebaseio.com/concertData.json"

  constructor(private http: HttpClient) { }

  eventData = {
    eventTitle:'Title',
    eventBanner: 'url',
    eventDate: '',
    eventLoc: 'location'
  }

  dataRes: any
  c: any
  locMapCoords = [1,1]

  getEventData(id: any){
    console.log(id)
    let dbUrl = ''
    if (id == 1) {
      dbUrl = this._abcFilmFestivalUrl
    }
    else {
      dbUrl = this._abcConcertUrl
    }
    return this.http.get(dbUrl)
  }

  private _ffRegUrl = "https://anglr-travel-default-rtdb.firebaseio.com/ffRegistration.json"
  private _concertRegUrl = "https://anglr-travel-default-rtdb.firebaseio.com/concertRegistration.json"
  registerEmailforEvent(id: any, userEmail: any){
    let dbUrl = ''
    if (id == 1) {
      dbUrl = this._ffRegUrl
    }
    else {
      dbUrl = this._concertRegUrl
    }
    return this.http.post(dbUrl,
      {email: userEmail})
  }

  a: any
  data = {
    ff: false,
    c: false
  }
  getRegEvents(userEmail: any){
    
    this.http.get(this._ffRegUrl)
    .subscribe((response) => {
      this.a = response;

      Object.keys(this.a).forEach((key: any) => {
        if (this.a[key].email === userEmail)
          console.log('yes registered in ff')
          this.data.ff = true
      })
    })
  
    this.http.get(this._concertRegUrl)
    .subscribe((response) => {
      this.a = response;

      Object.keys(this.a).forEach((key: any) => {
        if (this.a[key].email === userEmail)
          console.log('yes registered in concert')
          this.data.c = true
      })
    })

    // console.log(data)
    // return data
  
  
  }
        


}
