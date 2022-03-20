import { Component, OnInit } from '@angular/core';
import {  SearchStudentService } from 'src/app/Services/searchstudent.service';

@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.component.html',
  styleUrls: ['./view-report.component.css']
})
export class ViewReportComponent implements OnInit {

  constructor(private searchsudent:SearchStudentService) { }

  ngOnInit(): void {
  }
  stud:any;
  DisplayStudent()
  {
    this.searchsudent.searchStudent().subscribe((data)=>{this.stud=data;console.table(this.stud)});
  }
  
  
}
