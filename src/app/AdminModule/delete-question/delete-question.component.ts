import { Component, OnInit } from '@angular/core';
import { QuestionDetails } from 'src/app/Model/QuestionDeails';
import { DeleteQuestionService } from 'src/app/Services/deletequestion.service';


@Component({
  selector: 'app-delete-question',
  templateUrl: './delete-question.component.html',
  styleUrls: ['./delete-question.component.css']
})
export class DeleteQuestionComponent implements OnInit {

  constructor(private delque:DeleteQuestionService) { }



questiondetails:QuestionDetails={};



  ngOnInit(): void {
  }
  questioninfo:any;
  getQuestion()
  {
    
    this.delque.getquestion().subscribe((data)=>{this.questioninfo=data,console.table(this.questioninfo)});
    
  }

  searchque:any;
  result:any;
doclick()
{
  debugger;
  this.delque.searchquestion().subscribe((data:any)=>{this.result=data;console.table(this.result)});
  this.getQuestion()
}



  msg:any;
  removequestion(cid:number)
  {
  this.delque.deleteQuestion(cid).subscribe((data)=>{this.msg=data,console.log(this.msg)});
  window.alert("Record deleted!!");
  this.getQuestion()
  }


}
