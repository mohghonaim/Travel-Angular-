import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {NgForm} from '@angular/forms';
import { EventsService } from '../events.service';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  checked: boolean;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', checked: false},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', checked: false},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', checked: false},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', checked: false},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', checked: false},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', checked: false},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', checked: false},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', checked: false},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', checked: false},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', checked: false},
];


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  displayedColumns: string[] = ['position2', 'position', 'eventName', 'registered', 'checked'];
  // dataSource = ELEMENT_DATA;


  
  data2 = {
    ff: false,
    c: false
  }
  

  constructor(public auth: AuthService, public eventService: EventsService,
    public http: HttpClient,
     @Inject(MAT_DIALOG_DATA) public data: any) { }

  userEmail = this.auth.loggedInEmail

  ngOnInit(): void {
    this.getRegEvents(this.userEmail)
  }
  private _ffRegUrl = "https://anglr-travel-default-rtdb.firebaseio.com/ffRegistration.json"
  private _concertRegUrl = "https://anglr-travel-default-rtdb.firebaseio.com/concertRegistration.json"

  cancelReg(){
    console.log(this.dataSource)
    if (this.dataSource[0].checked == true){
      console.log('delete')
      this.dataSource[0].registered = false
      console.log(this.dataSource)
    }
    if (this.dataSource[1].checked == true){
      console.log('delete')
      this.dataSource[1].registered = false
    }
  }

  printRow(row: any){
    console.log(row.position)
    console.log(row.checked)
  }

  

  checked: any = [];

  hideCheckbox = true

  editReg(){
    this.hideCheckbox=false
  }

  regData = {
    ff: true,
    c: true
  }


  data2list = [false, false]
  


  
  a: any

  getRegEvents(userEmail: any){
    
    this.http.get(this._ffRegUrl)
    .subscribe((response) => {
      this.a = response;

      Object.keys(this.a).forEach((key: any) => {
        if ((this.a[key].email === userEmail)){
          console.log('yes registered in ff')
          this.dataSource[0].registered = true
          this.data2.ff = true
          this.data2list[0] = true}
      })
    })
  
    this.http.get(this._concertRegUrl)
    .subscribe((response) => {
      this.a = response;

      Object.keys(this.a).forEach((key: any) => {
        if (this.a[key].email === userEmail){
          console.log('yes registered in concert')
          this.dataSource[1].registered = true
          this.data2.c = true
          this.data2list[1] = true
        }
      })
    })


    // console.log(data)
    // return data
  
  
  }

  
  dataSource = [
    {position: 1, eventName: 'ABD Film Festival', registered: this.data2list[0], checked: false},
    {position: 2, eventName: 'ABC Live Concert', registered: this.data2list[1], checked: false},
  ]

  
  getRegisteredEvents(){
    this.eventService.getRegEvents(this.userEmail)
    console.log("reg Data:", this.regData)
    this.dataSource[0].registered = this.regData.ff
    this.dataSource[1].registered = this.regData.c

  }

  printD(){
    console.log(this.data2list)
  }
  

  

  // getCheckbox(checkbox: any){
  //   this.checked = []; // resetting each Time new event is fire.
  //   // filtering only checked vlaue and assign to checked variable.
  //   const checked = this.checkBox?.filter(checkbox => checkbox.checked);

  //   // then, we make object array of checked, and value by checked variable  
  //   checked?.forEach(data => {
  //     this.checked.push ({ 
  //       'checked' : data.checked,
  //       'value':  data.value
  //     });
  //   });


}
