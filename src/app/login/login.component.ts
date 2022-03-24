import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, FormControl, Validators } from '@angular/forms';

import { Registerservice } from '../Services/Registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private regservice:Registerservice ) { }


  ngOnInit(): void {
    console.log(" login page call");
  }

  loginform = this.fb.group(
    {
      'Email' : new FormControl('',[Validators.required,Validators.email]),
      
      'password': new FormControl('',[Validators.required,Validators.minLength(6)])

    }
  );
  dologin()
  {
    console.log(this.loginform.value);

    
      window.alert("Login Successfully");
    

   
    
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
