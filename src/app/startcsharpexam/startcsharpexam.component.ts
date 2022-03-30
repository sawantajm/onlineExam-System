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
  
  

   

 







  d?:any;
  ngOnInit(): void {
    //const obs$=interval(1000)
    //this.d=obs$.subscribe((data)=>{console.log(data)});
    
    this.DisplayQuetion()
  }
 


 public currentQuetion:number=0;


 


//add que and ans
quesans=[{question:"",ans:" "}];
studentresponse:any
Answer(qid:any,option:any)
{
  debugger;
  console.log(qid,option.target.value);
  this.quesans.push(qid,option.target.value);
  //this.examservice.sendAnsdata(this.quesans).subscribe((data:any)=>{this.studentresponse=data;console.log(this.studentresponse)});
     
      console.log(this.quesans);
}

count=0;
public comans:any=[];
compareans(option:any)
{
  this.examservice. getcsharpQuetion().subscribe((data)=>{this.comans=data;console.log(this.comans)});

debugger;
 
  if(this.comans[this.currentQuetion]?.correctanswers==option.target.value )
  {
    this.count++;
  }
  else{
   this.count=this.count;
  }
  console.log(this.count);
}





 
 

  



 public questionlist:any=[];
 DisplayQuetion()
 {
  
 

  this.examservice. getcsharpQuetion().subscribe((data)=>{this.questionlist=data;console.log(this.questionlist)});
   
 }

 message:any;
nextQuestion()
{
 
  if(this.currentQuetion<4)

  {
    debugger;
    this.currentQuetion++}
  else{
    this.message="Successfully Completed"
  }
 
   
   

 
 
}
/*
result:any;
Answeres()
 {
   debugger;
   this.examservice. sendcsharpanswere(this.examconduct.value).subscribe((data)=>{this.result=data;console.log(this.result)})
 }
*/
}
