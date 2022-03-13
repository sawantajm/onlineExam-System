import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }
username?:string;
email?:string;
Mobile?:number;
Dob?:Date;
State?:string;
YOC?:Date;
Captcha?:string;


  ngOnInit(): void {
  }
  Registeruser(item:any)
  {
    console.log("Pass")
console.log(item);
  }
}
