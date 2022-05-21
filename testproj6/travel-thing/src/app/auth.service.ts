import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "https://anglr-travel-default-rtdb.firebaseio.com/users.json"
  private _loginUrl = "https://anglr-travel-default-rtdb.firebaseio.com/users.json"
  
  constructor(private http: HttpClient, private router: Router) { }


  registerUser(userData:any) {
    return this.http.post(this._registerUrl,
    userData)
  }

  arr: any
  obj: any

  loggedIn:boolean = false
  registered:boolean = false

  loggedInEmail = ''
  loggedInFname = ''
  loggedInLname = ''

  logger = new Subject<boolean>();
  isLoggedIn(): Observable<boolean> {
    return this.logger.asObservable();
  }

  logoutUser(){
    this.loggedInEmail=''; this.loggedInFname=''; this.loggedInLname=''
    this.setLoggedIn(false)
    this.logger.next(this.loggedIn)
  }


  getLoggedIn(){
    return this.loggedIn
  }
  
  setLoggedIn(value: boolean){
    this.loggedIn = value
    this.logger.next(this.loggedIn);
  }


  loginUser(userData:any){
    return this.http.get(this._loginUrl)
  }

  redirectEvents(){
    if (this.loggedIn){
      this.router.navigate(['/events']);
    }
  }

  redirectHome(){
    if (this.loggedIn){
      this.router.navigate(['/home']);
    }
  }

  registerUser2(userData:any) {
    this.redirectLogin()
    return this.http.post(this._registerUrl,
    userData)
  }

  redirectLogin(){
    this.router.navigate(['/login']);
  }
  



}
