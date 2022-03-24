import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { getMatIconFailedToSanitizeUrlError } from '@angular/material/icon';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/adminlogin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private loginservice:LoginService,private router:Router,private service1:LoginService) { }

  emp:any={};
  loginstatus:any;
  loggedinempdetails:any={};
  ngOnInit(): void {
    console.log(" Admin login page call");
  }

  loginform = this.fb.group(
    {
      Email :['',[Validators.required,Validators.minLength(6)]],
      //password:1LC,1UP,NUMBERS,SP CHAR,atleast 8 char
      password: ['',[Validators.required,Validators.minLength(6)]]

    }
  );


  get Email()
  {
    return this.loginform.get('Email');
  }
  get password()
  {
    return this.loginform.get('password');
  }


  err:any;
  dologin()
  {

    console.log(this.loginform.value);
    
    window.alert("Login Successfully");

/*
    this.service1.Login(this.loginform.value).subscribe(
      (res)=>{
        console.log("Success");
        sessionStorage.setItem('username',this.loginform.Username)
        //this.service1.subject.next(true);
        this.router.navigate(['AdminDashboard']);
      },
      error =>{
        this.errorMessage = "Login Failed";
      },
    );
*/
    
      
  }


  

  
}


