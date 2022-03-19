import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder) { }


  ngOnInit(): void {
    console.log(" login page call");
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
