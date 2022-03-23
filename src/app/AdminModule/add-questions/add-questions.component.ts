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
    //'level':new FormControl('',[Validators.required]),
    //'subject':new FormControl([null],[Validators.required]),
    'question':new FormControl('',[Validators.required]),
    
    'option1':new FormControl('',[Validators.required]),
    
    'option2':new FormControl('',[Validators.required]),
    'option3':new FormControl('',[Validators.required]),
    'option4':new FormControl('',[Validators.required]),
    'correctanswers':new FormControl('',[Validators.required]),
    
    });

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







   get level()
    {
     return this.AddQuestion.get('level');
    }


    
    
    get subject()
    {


      
      //const value = {...this.AddQuestion.value, subject: +this.AddQuestion.value.subject };
      return this.AddQuestion.get('subject');
      
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

  getlevel()
  {
    this.addq.getlevel().subscribe((data)=>{this.levelinfo=data,console.table(this.levelinfo)});

  }

recordinfo:any=[];
GetQuestion()
{
this.addq.getquestion().subscribe((data)=>{this.recordinfo=data, console.table(this.recordinfo)});
}


result:any;
Addquestion()
{
  
  console.log(this.AddQuestion.value);
  debugger;
  
 
  this.addq.InsertRecord(this.AddQuestion.value).subscribe((data)=>{this.result=data,console.log(this. result)});

}

}
