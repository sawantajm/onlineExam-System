import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { ConductExamService } from '../Services/conductExam.service';
import { QuestionDetails } from '../Model/conductexam.model';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-conduct-exam',
  templateUrl: './conduct-exam.component.html',
  styleUrls: ['./conduct-exam.component.css']
})
export class ConductExamComponent implements OnInit {

  





  constructor(private fb:FormBuilder,private examservice:ConductExamService) {
   
   }



  public currentQuetion:number=0;

public currentLevel="";

   examconduct=this.fb.group({
  "student_response":new FormControl(['',Validators.required])
  
   });

option()
{
  return this.examconduct.get('student_response');
}






  d?:any;
  ngOnInit(): void {
    //const obs$=interval(1000)
    //this.d=obs$.subscribe((data)=>{console.log(data)});
    
    this.DisplayQuetion()
  }


   



  public questionlist:any=[];
  DisplayQuetion()
  {
   
  

   this.examservice.getQuetion().subscribe((data)=>{this.questionlist=data;console.log(this.questionlist)});
    
  }

  message:any;
nextQuestion()
{
  
  
    this.currentQuetion++;
    this.message="Successfully Completed"
 
  
  
}

result:any;
Answeres(curreQue:any,option:any)
  {
    debugger;
    this.examservice.sendanswere(this.examconduct.value).subscribe((data)=>{this.result=data;console.log(this.result)})
  }

}
