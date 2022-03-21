import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminLoginComponent } from './AdminModule/admin-login/admin-login.component';
import { AdminProfileComponent } from './AdminModule/admin-profile/admin-profile.component';
import { QueAddRemoveComponent } from './AdminModule/que-add-remove/que-add-remove.component';
import { SearchStudentComponent } from './AdminModule/search-student/search-student.component';
import { ViewReportComponent } from './AdminModule/view-report/view-report.component';
import { ConductExamComponent } from './conduct-exam/conduct-exam.component';
import { ExamRegistrationComponent } from './exam-registration/exam-registration.component';
import { ExampageComponent } from './exampage/exampage.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReportComponent } from './report/report.component';

import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { StartSqlExamComponent } from './start-sql-exam/start-sql-exam.component';
import { StartcsharpexamComponent } from './startcsharpexam/startcsharpexam.component';
import { StartexamComponent } from './startexam/startexam.component';

const routes: Routes = [
{path:'userhome',component:HomeComponent},
{path:'Regisration',component:ExamRegistrationComponent},
{path:'login',component:LoginComponent},
{path:'about',component:AboutusComponent},
{path:'Resetpassword',component:ResetpasswordComponent},
{path:'exam',component:ExampageComponent},
{path:'startexam',component:StartexamComponent},
{path:'conductExam',component:ConductExamComponent},
{path:'Report',component:ReportComponent },
{path:"admin",component:AdminLoginComponent},
{path:"adminprofile",component:AdminProfileComponent},
{path:'searchstudent',component:SearchStudentComponent},
{path:"addremove",component:QueAddRemoveComponent},
{path:'sqltest',component:StartSqlExamComponent},
{path:"csharp",component:StartcsharpexamComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
