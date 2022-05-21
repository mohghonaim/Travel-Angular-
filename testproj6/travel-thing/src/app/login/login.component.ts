import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatFormFieldControl } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import {MatDialog, throwMatDialogContentAlreadyAttachedError} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  loginUserData = {
    email: '',
    password: ''
  }

  // loginUserData2 = {
  //   email: '',
  //   password: ''
  // }

  constructor(private _auth: AuthService, private http: HttpClient) { }

  a: any
  b: any
  c: any
  key = 'car1'

  imgurl = 'nothing yet'

  ngOnInit(): void {
    //WORKS
    //this.getCar1();
  }

  found = false;
  hideNotFound = true;

  loginUser(){
    this._auth.loginUser(this.loginUserData)
    .subscribe((response) => {
      console.log(this.loginUserData.email)
      this.a = response;

      Object.keys(this.a).forEach((key: any) => console.log(key + ":" + this.a[key].email))

      Object.keys(this.a).forEach((key: any) => {
        if (this.a[key].email === this.loginUserData.email){
          if (this.a[key].password === this.loginUserData.password){
            console.log("Confirmed. email: " + this.a[key].email + " password: " + this.a[key].password);
            this.found = true
            this._auth.setLoggedIn(true)
            // this._auth.redirectEvents()
            this._auth.redirectHome()
          }
        }
    
      })

      if (this.found === false) {
        console.log("User not found")
        this._auth.setLoggedIn(false)
        this.hideNotFound = false;
        //this.found = true;
      }
      
      //34an hy redirect 5las lw found
      //this.found = false

    });

  }
  //_____________________________________________

email = '';
password = '';


loginUserData2 = {
  email: '',
  password: '',
}


// a1: string[][] = [['First name', 'Last name', 'Email', 'Age', 'Gender', 'Subscribed']];


formm:any

onSubmit(form: any){
  
  
  this.loginUserData2.email = this.email,
  this.loginUserData2.password = this.password,

  this._auth.loginUser(this.loginUserData2)
    .subscribe((response) => {
      console.log(this.loginUserData2.email)
      this.a = response;

      Object.keys(this.a).forEach((key: any) => console.log(key + ":" + this.a[key].email))

      Object.keys(this.a).forEach((key: any) => {
        if (this.a[key].email === this.loginUserData2.email){
          if (this.a[key].password === this.loginUserData2.password){
            console.log("Confirmed. email: " + this.a[key].email + " password: " + this.a[key].password);
            this.found = true
            this._auth.loggedInEmail = this.a[key].email
            this._auth.loggedInFname = this.a[key].fname
            this._auth.loggedInLname = this.a[key].lname
            this._auth.setLoggedIn(true)
            // this._auth.redirectEvents()
            this._auth.redirectHome()
          }
        }
    
      })

      if (this.found === false) {
        console.log("User not found")
        this._auth.setLoggedIn(false)
        this.hideNotFound = false;
        //this.found = true;
      }
      
      //34an hy redirect 5las lw found
      //this.found = false

    });




}



}