import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ConductExamService } from '../Services/conductExam.service';

@Component({
  selector: 'app-startcsharpexam',
  templateUrl: './startcsharpexam.component.html',
  styleUrls: ['./startcsharpexam.component.css']
})
export class StartcsharpexamComponent implements OnInit {

  constructor(private fb:FormBuilder,private examservice:ConductExamService) {
   
  }



 public currentQuetion:number=0;

public currentLevel="";

  examconduct=this.fb.group({
 "student_response":new FormControl(['',Validators.required])
 
  });

  student_response()
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
  
 

  this.examservice. getcsharpQuetion().subscribe((data)=>{this.questionlist=data;console.log(this.questionlist)});
   
 }

 message:any;
nextQuestion()
{
 
 
   this.currentQuetion++;
   this.message="Successfully Completed"

 
 
}

result:any;
Answeres()
 {
   debugger;
   this.examservice. sendcsharpanswere(this.examconduct.value).subscribe((data)=>{this.result=data;console.log(this.result)})
 }

}
