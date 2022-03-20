import { Component, OnInit } from '@angular/core';
import { SearchStudentService } from 'src/app/Services/searchstudent.service';


@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css']
})
export class SearchStudentComponent implements OnInit {

  constructor( private searchsudent:SearchStudentService) { }

  ngOnInit(): void {
  }

  stud:any;
  DisplayStudent()
  {
    this.searchsudent.searchStudent().subscribe((data)=>{this.stud=data;console.table(this.stud)});
  }
}
