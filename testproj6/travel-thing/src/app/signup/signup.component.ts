import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  registerUserData = {
    email: '',
    password: ''
  }

  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
  }

  registerUser(){
    // validate l registration
    this._auth.registerUser(this.registerUserData)
    .subscribe(response => console.log(response));
    // redirectLogin()
  }

//_____________________________________________

fname = '';
lname = '';
email = '';
password = '';
age = '';
gender = '';
subscribed = 'true';
formValid = true;

registerUserData2 = {
  fname: '',
  lname: '',
  email: '',
  password: '',
  age: '',
  gender: '',
  subscribed: 'true',
}


a1: string[][] = [['First name', 'Last name', 'Email', 'Age', 'Gender', 'Subscribed']];


onlyLetters(string: any) {
  // return /^[a-zA-Z]+$/.test(string);
  console.log(/^[a-zA-Z]+$/.test(string));
  //this.ageCondition=true;
  return(/^[a-zA-Z]+$/.test(string));
}

onlyNumbers(string: any) {
  // return /^[a-zA-Z]+$/.test(string);
  console.log(/^[0-9]+$/.test(string));
  //this.ageCondition=true;
  return(/^[0-9]+$/.test(string));
 
}

onlyMinLength(string: any) {
  // return /^[a-zA-Z]+$/.test(string);
  console.log(/^[0-9]+$/.test(string));
  console.log(string.length >= 3)
  //this.ageCondition=true;
  return(string.length >= 3);
 
}


onlyEmail(string: any){
  console.log(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(string));
  //this.emailCondition=true;
  return(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(string));
}

genderValid(value: any){
  if (value != "F" && value != "M")
  { return false; }
  return true;
}

formm:any

onSubmit(form: any){
  console.log('hi');
  this.formm = form
  console.log(form)
  console.log(form.email)

  // this.onlyLetters(this.fname);
  // this.onlyLetters(this.lname);
  // this.onlyNumbers(this.age);
  // this.onlyEmail(this.email);


  if (this.onlyLetters(this.fname)&&
  this.onlyLetters(this.lname)&&
  this.onlyNumbers(this.age)&&
  this.onlyEmail(this.email)&&
  this.genderValid(this.gender) && this.onlyMinLength(this.password))
  {
  // this.a1.push([this.fname, this.lname, this.email, this.age, this.gender, this.subscribed]);
  // console.log(this.fname, this.lname, this.email, this.password, this.age, this.gender, this.subscribed)
  
  this.registerUserData2.fname = this.fname,
  this.registerUserData2.lname = this.lname,
  this.registerUserData2.email = this.email,
  this.registerUserData2.password = this.password,
  this.registerUserData2.age = this.age,
  this.registerUserData2.gender = this.gender,
  this.registerUserData2.subscribed = this.subscribed,


  this.formValid = true;

  this._auth.registerUser2(this.registerUserData2)
  .subscribe(response => console.log(response));
  // redirectLogin()

  }
  else
  { this.formValid=false; }



}






}
