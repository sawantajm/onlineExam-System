import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Registerservice } from '../Services/Registration.service';
import { userLogin } from '../Services/userLogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private regservice:Registerservice ,private loginservice:userLogin, private router:Router) { }


  ngOnInit(): void{
   
    console.log(" login page call");
  }

  loginform = this.fb.group(
    {
      'Email' : new FormControl('',[Validators.required,Validators.email]),
      
      'password': new FormControl('',[Validators.required,Validators.minLength(6)])

    }
  );

isuservalid?:boolean;


  login:any;
  dologin()
  {
    console.log(this.loginform.value);
debugger;
      this.loginservice.loginuser([this.loginform.value.Email,this.loginform.value.password])
      .subscribe((data)=>
      {

              if(data=='Failure')
            {
              this.isuservalid=false;
              window.alert("Login Unsuccessfull");
              this.router.navigate(['/home']);
            }
            else{
              this.isuservalid=true;
              window.alert("Login Successfull");
              this.router.navigate(['/userhome']);
            }
  
  });
    
     
    

   
    
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
