import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { ConductExamService } from '../Services/conductExam.service';
import { QuestionDetails } from '../Model/conductexam.model';
import { opcheck } from '../Model/examradio';

@Component({
  selector: 'app-conduct-exam',
  templateUrl: './conduct-exam.component.html',
  styleUrls: ['./conduct-exam.component.css']
})
export class ConductExamComponent implements OnInit {

  





  constructor(private examservice:ConductExamService) {
   
   }



  




conductexam:QuestionDetails={};




  d?:any;
  ngOnInit(): void {
    //const obs$=interval(1000)
    //this.d=obs$.subscribe((data)=>{console.log(data)});
    
    this.DisplayQuetion()
  }


   



  questioninfo:any;
  DisplayQuetion()
  {
   console.log("Exam");
  

   this.examservice.getQuetion().subscribe((data)=>{this.questioninfo=data;console.log(this.questioninfo)});
    this.conductexam=this.questioninfo;
  }

  



}
