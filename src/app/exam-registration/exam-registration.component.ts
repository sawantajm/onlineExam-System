import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Registration } from '../Model/Registration.model';
import { Registerservice } from '../Services/Registration.service';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-exam-registration',
  templateUrl: './exam-registration.component.html',
  styleUrls: ['./exam-registration.component.css']
})
export class ExamRegistrationComponent implements OnInit {

  
  constructor(private  fb:FormBuilder,private register:Registerservice) { }

  



  registertable:Registration={};

  ngOnInit(): void {
   this.getRecord()
  }

  registrationform=this.fb.group(
    {
    'fullname': new FormControl('',[Validators.required]),
    'email':new FormControl('',[Validators.required]),
    'password':new FormControl('',[Validators.required]),
    
    'confirmpassword':new FormControl('',[Validators.required]),
    
    'city':new FormControl('',[Validators.required]),
    'dob':new FormControl('',[Validators.required]),
    'state':new FormControl('',[Validators.required]),
    'qualification':new FormControl('',[Validators.required]),
    'yearOfComplition':new FormControl('',[Validators.required]),
    'mobileNo':new FormControl('',[Validators.required,Validators.maxLength(11)])
    });
    get fullname()
    {
      return this.registrationform.get('fullname');
    }
    
    get email()
    {
      return this.registrationform.get('email');
    }
    get password()
    {
      return this.registrationform.get('password');
    }
    get confirmpassword()
    {
      return this.registrationform.get('confirmpassword');
    }
    get city()
    {
      return this.registrationform.get('city');
    }
    get dob()
    {
      return this.registrationform.get('dob');
    }
    get state()
    {
      return this.registrationform.get('state');
    }
    get qualification()
    {
      return this.registrationform.get('qualification');
    }
    get yearOfComplition()
    {
      return this.registrationform.get('yearOfComplition');
    }
    get mobileNo()
    {
      return this.registrationform.get('mobilNo');
    }








  recordinfo:any;
  getRecord()
  {
  this.register.getrecords().subscribe((data)=>{this.recordinfo=data; console.table(this.recordinfo)});
  }
result:any;
setRecord()
{
  console.log(this.registrationform.value);
  debugger;

  this.register.InsertRecord(this.registrationform.value).subscribe((data)=>{this.result=data,console.log(this. result)});

}
//for validation
doregister(rform:NgForm)
{
  debugger;
 console.log(this.registertable.fullname);
 
 console.log(rform.value);

}

}
