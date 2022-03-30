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
  loginform: any;
  constructor(private fb:FormBuilder,private loginservice:LoginService,private router:Router,private service1:LoginService) { }
 
  ngOnInit(): void {
    console.log(" Admin login page call");

    this.loginform = this.fb.group(
      {
        Email:['',[Validators.required,Validators.minLength(6)]],
        //password:1LC,1UP,NUMBERS,SP CHAR,atleast 8 char
        password: ['',[Validators.required,Validators.minLength(6)]]
  
      }
    );
  }

  
 

  get Email()
  {
    return this.loginform.get('Email');
  }
  get password()
  {
    return this.loginform.get('password');
  }
  model:any={};
  errorMessage!: any;




  emp:any={};
  loginstatus:any;
  loggedinempdetails:any={};

  err:any;
  dologin()
  {
    //debugger;
    //console.log(this.emp);
    //Admin
    if(this.loginform.Email=="Admin@gmail.com" &&this.loginform.password=="Admin@123")
    {
      debugger;
      this.loginservice.loginuservariable=true;
      sessionStorage.setItem('Email','admin')
      //to check any user is logged in or not 
      this.loginservice.loginCheck();
      this.router.navigate(['/adminprofile']);

    }

    else if(this.loginform!= null)
    {
      debugger;
       this.loginservice.empLogin(this.loginform.value).subscribe((data)=>{
        this.loggedinempdetails=data as unknown as JSON;
        debugger;

         sessionStorage.setItem('Email',this.loggedinempdetails.Email);
          //to check any user is logged in or not 
      this.loginservice.loginCheck();
      debugger;
         if(data!='Invalid')
         {
           debugger;
        this.loginservice.loginuservariable=true;
        window.alert("Login Successfull");
          this.router.navigate(['/adminprofile']);
          
         }
         
     /*  else 
       {
        console.log(this.loggedinempdetails.text);
         debugger;
         this.userrouter.navigate(['/login']);
         this.err="Invalid Mobile No or Password!!!";
       }*/

       }, (error:HttpErrorResponse) => {                              //Error callback
       
        if(error.status===401)
        {
          window.alert("Invalid Username And Password");
          this.router.navigate(['/admin']);
          //this.err= error.error.message;
          //this.err="Invalid Email No or Password!!!";
         
        }
      });
      }
      else{
        //this.err="Please enter valid creditianls!!!";
        window.alert("Please enter valid Credintial");
      }
  }
















/*
  err:any;
 dologin()
  {

    console.log(this.loginform.value);
    
    

debugger;
    this.service1.empLogin(this.loginform.value).subscribe(
      (res)=>{
        console.log("Success");
        
        sessionStorage.setItem('Email',this.loginform.Email)
        //this.service1.subject.next(true);
        this.router.navigate(['adminprofile']);
      },
      error =>{
        this.errorMessage = "Login Failed";
      }
    );

    
      
  }
  */
   /*
result:any;
  dologin()
{
debugger;
console.log( this.loginform.value);
this.service1.empLogin(this.loginform.value).subscribe(
(data: any) => {
this.result=data,console.log(this.result)



debugger;
if(data !== "Invalid") {



alert("Welcome Admin");
this.router.navigate(['adminprofile']);



}
else
{
alert("check the Credentials");
}
}
);



}
*/

}


  

  



