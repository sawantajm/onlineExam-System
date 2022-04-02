import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup} from '@angular/forms';
import { searchstudent } from 'src/app/Model/SearchStudent.model';
import { SearchStudentService } from 'src/app/Services/searchstudent.service';


@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css']
})
export class SearchStudentComponent implements OnInit {


  

  constructor( private searchsudent:SearchStudentService,private fb:FormBuilder) { 

    
  }








  ngOnInit(): void {
    
  }
  searchstudent=this.fb.group({
    SubjectName:['',],
    State:['',],
    City:['',],
    LevelName:['',],
	
MarksObtained :['',]



  });



get SubjectName()
{
  return this.searchstudent.get('SubjectName');
}
get State()
{
  return this.searchstudent.get('State');
}
get City()
{
  return this.searchstudent.get('City');
}
get LevelName()
{
  return this.searchstudent.get('LevelName');
}
get MarksObtained()
{
  return this.searchstudent.get('MarksObtained');
}

stud:any=[];
  DisplayStudent()
  {
    debugger;
    this.searchsudent.searchStudent(this.searchstudent.value).subscribe((data)=>{this.stud=data;console.table(this.stud)});
    console.log(this.stud);
  }
/*
  info:any;
  getdata()
  {
    this.searchsudent.getinfo().subscribe((data)=>{this.info=data; console.table(this.info)})
  }*/

}
