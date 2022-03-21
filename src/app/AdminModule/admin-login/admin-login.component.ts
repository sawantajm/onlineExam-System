import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private fb:FormBuilder) { }


  ngOnInit(): void {
    console.log(" Admin login page call");
  }

  loginform = this.fb.group(
    {
      'Email' : new FormControl('',[Validators.required,Validators.minLength(6)]),
      //password:1LC,1UP,NUMBERS,SP CHAR,atleast 8 char
      'password': new FormControl('',[Validators.required,Validators.minLength(6)])

    }
  );
  dologin()
  {
    console.log(this.loginform.value);
  }
  get Email()
  {
    return this.loginform.get('Email');
  }
  get password()
  {
    return this.loginform.get('password');
  }

  
}


