import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DahabService {

  private _imgUrl = "https://anglr-travel-default-rtdb.firebaseio.com/cars1.json"

  private _dahabUrl = "https://anglr-travel-default-rtdb.firebaseio.com/dahabData.json"
  private _sharmUrl = "https://anglr-travel-default-rtdb.firebaseio.com/sharmData.json"

  constructor(private http: HttpClient) { }

  locData = {
    title:'Location',
    myCarousel:'x',
    myCarouselRef:'#x',
    myCarouselContnt: [['url', 'title']],
    myTempTable: [['t1', 't2', 't3', 't4']],
    myMapCoords:[30.024873,31.237229]
  }

  dataRes: any
  c: any
  locMapCoords = [1,1]
  myObs = new Subject<number[]>()

  getLocData2(id:any){
      this.http.get(this._dahabUrl).subscribe( response => {
        //console.log(this.b);
        //Object.keys(this.a).forEach((key: any) => console.log(key + ":" + this.a[key].email))
        this.c = response;
        
        this.locMapCoords[0] = this.c['locMapCoords'][0]
        this.locMapCoords[1] = this.c['locMapCoords'][1]
        this.myObs.next(this.locMapCoords)
      })

  }

  getLocData(id: any){
    console.log(id)
    let dbUrl = ''
    if (id == 1) {
      dbUrl = this._dahabUrl
    }
    else {
      dbUrl = this._sharmUrl
    }
    return this.http.get(dbUrl)
    // this.http.get(this._dahabUrl).subscribe( response => {
    //   // this.dataRes = response;
    //   // console.log("table result: ")
    //   // console.log(this.dataRes)
    //   return this.http.post(this._registerUrl,
    //     userData)
      
    // })

    // return this.locData
  }

  // getCar1(){
  //   this.http.get(this._imgUrl).subscribe( response => {
  //     //console.log(this.b);
  //     //Object.keys(this.a).forEach((key: any) => console.log(key + ":" + this.a[key].email))
  //     this.c = response;
  //     this.imgurl = this.c['car1']
  //   })
  // }

  
}
