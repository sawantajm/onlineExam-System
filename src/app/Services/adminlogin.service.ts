import { HttpClient } from '@angular/common/http';

import{Injectable} from '@angular/core'

import { Router } from '@angular/router';
@Injectable({providedIn:"root"})
export class LoginService
{
    constructor(private http:HttpClient,private userrouter:Router )
    {

    }
    readonly uri = "http://localhost:21332/api/Admin/AdminLogin";
     
  

    // checking employee  login  creditals from webapi
    empLogin(emp:any)
    {
        debugger;
    return  this.http.post(this.uri,emp,{responseType :'text'});
    
    }

    //to check user in logged in  or not
  loginsessionvariable:any;
  loginuser:any;
  loginCheck()
  {
      this.loginuser= sessionStorage.getItem('Email');
      if(this.loginuser!="Email")
      {
          debugger;
          this.loginsessionvariable=true;
      }
      else{
          this.loginsessionvariable=false;
      }
    
  }


    //log off 
public loginuservariable?:boolean;
   public dologoff()
    {
        debugger;
        sessionStorage.clear();
        this.loginuservariable=false;
       this.userrouter.navigate(['/home']);
    }

    
}