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

public currentLevel=" ";

   examconduct=this.fb.group(
     {
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
   
  

   this.examservice.getQuetion().subscribe((data)=>{this.questionlist=data;console.log(this.questionlist)});
    
  }

  message:any;
nextQuestion()
{
  
  if(this.currentQuetion<4)
  {

    this.currentQuetion++;

    
  } 
  
}






/*

result:any;
Answeres()
  {
    debugger;
    this.examservice.sendanswere(this.examconduct.value).subscribe((data)=>{this.result=data;console.log(this.result)})
  }*/
/*

declare clock:any;
 
  //timer     
  startCoundown(timeLeft:number)
  {
       var interval=setInterval(countdown,200000);
       Update();

       function countdown(){
           if(--timeLeft>0)
           {
               Update();

           }
           else{
               clearInterval(interval);
               Update();
               completed();
           }
       }

       function Update()
       {
           const hours=Math.floor(timeLeft/3600);
           const minutes=Math.floor((timeLeft %3600)/60);
           const second=timeLeft%60;


          var clock=  hours +':'+minutes +':'+second;
            
       }

       function completed()
       {
           document.write("successfully completed");
       }
  }
*/

   

  }

 

