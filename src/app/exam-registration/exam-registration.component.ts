import { Component, OnInit } from '@angular/core';
import { NgForm, ValidatorFn } from '@angular/forms';
import { Registration } from '../Model/Registration.model';
import { Registerservice } from '../Services/Registration.service';
import { FormBuilder,FormControl,FormGroup,AbstractControl, Validators } from '@angular/forms';
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
    'yearOfCompletion':new FormControl('',[Validators.required]),
    'mobileNo':new FormControl('',[Validators.required,Validators.maxLength(11)]),
    },
    {
    validators:this.mustMatch('password', 'confirmpassword')
  }
    );








  

  mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
      return null;
    };
  }





















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
    get yearOfCompletion()
    {
      return this.registrationform.get('yearOfCompletion');
    }
    get mobileNo()
    {
      return this.registrationform.get('mobilNo');
    }








  recordinfo:any=[];
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
 window.alert("Registred  Successfully");
 
 console.log(rform.value);

}

}
