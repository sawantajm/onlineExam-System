import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { distinct } from 'rxjs';
import { QuestionDetails } from 'src/app/Model/QuestionDeails';
import { AddQuesionService } from 'src/app/Services/addquestion.service';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit {

  constructor(private fb:FormBuilder,private   addq:AddQuesionService) { }


levelinfo:any=[];

  ngOnInit(): void {
    this.GetQuestion();
   //this.getlevel()
    
  }

  
qdata:QuestionDetails={};

   AddQuestion=this.fb.group(
    {
      LevelId:['',[Validators.required]],
      SubjectId:['',[Validators.required]],
    question:['',[Validators.required]],
    
    option1:['',[Validators.required]],
    
    option2:['',[Validators.required]],
    option3:['',[Validators.required]],
    option4:['',[Validators.required]],
    correctanswers:['',[Validators.required]],
    
    });
    /*
    this.contactForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(10)]],
      lastname: ['', [Validators.required, Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', [Validators.required]],
      isMarried: ['', [Validators.required]],
      country: ['', [Validators.required]],
      address: this.formBuilder.group({
        city: ['', [Validators.required]],
        street: ['', [Validators.required]],
        pincode: ['', [Validators.required]],
      })
    });


    */









/*


   subjectinfo:any={};
    levelId?:number;
    onChangeState(event:Event) {
  
      this.levelId=parseInt((event.target as HTMLInputElement).value);
        this.addq.getlevel().subscribe((data)=>this.subjectinfo=data);
        debugger;
  
    }


    subjectinfo1: any={};
  levelId1?:number;
  onChange(event:Event) {

    this.levelId1 =parseInt((event.target as HTMLInputElement).value);
      this.addq.getsubject(this.levelId1).subscribe((data)=>this.subjectinfo1=data);
      debugger;

  }

*/





   get LevelId()
    {
     return this.AddQuestion.get('LevelId');
    }


    
    
    get SubjectId()
    {


      
      //const value = {...this.AddQuestion.value, subject: +this.AddQuestion.value.subject };
      return this.AddQuestion.get('SubjectId');
      
    }
    get question()
    {
      return this.AddQuestion.get('question');
    }
    get option1()
    {
      return this.AddQuestion.get('option1');
    }
    get option2()
    {
      return this.AddQuestion.get('option2');
    }
   
    get correctanswers()
    {
      return this.AddQuestion.get('correctanswers');
    }
/*
  getlevel()
  {
    this.addq.getlevel().subscribe((data)=>{this.levelinfo=data,console.table(this.levelinfo)});

  }
*/
recordinfo:any=[];
GetQuestion()
{
this.addq.getquestion().subscribe((data)=>{this.recordinfo=data, console.table(this.recordinfo)});
}


result:any;
Addquestion()
{ 

  
  console.log(this.AddQuestion.value);
  
  
 
  this.addq.InsertRecord(this.AddQuestion.value).subscribe((data)=>{this.result=data,console.log(this. result)});

    window.alert("Question Added");
}

}
