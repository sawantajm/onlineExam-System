import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { charplevelIIIExamService } from 'src/app/Services/charpexamthird.service';

@Component({
  selector: 'app-csharplevel3',
  templateUrl: './csharplevel3.component.html',
  styleUrls: ['./csharplevel3.component.css']
})
export class Csharplevel3Component implements OnInit {

  constructor(private examservice:charplevelIIIExamService,private router:Router) { }

  ngOnInit(): void {

    this.DisplayQuetion()
  }
 







public currentQuetion:number=0;





//add que and ans
quesans:any=[];
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

if(this.comans.correctanswers==option.target.value )
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

if(this.currentQuetion<5)

{
debugger;
this.currentQuetion++}
else{
window.alert("Level Three Successfully Completed");
this.router.navigate(['/Report']);

}






}
}
