import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddQuestionsComponent } from './AdminModule/add-questions/add-questions.component';
import { AdminLoginComponent } from './AdminModule/admin-login/admin-login.component';
import { AdminProfileComponent } from './AdminModule/admin-profile/admin-profile.component';
import { DeleteQuestionComponent } from './AdminModule/delete-question/delete-question.component';

import { SearchStudentComponent } from './AdminModule/search-student/search-student.component';
import { ViewReportComponent } from './AdminModule/view-report/view-report.component';
import { ConductExamComponent } from './conduct-exam/conduct-exam.component';
import { ExamRegistrationComponent } from './exam-registration/exam-registration.component';
import { ExampageComponent } from './exampage/exampage.component';
import { HomeComponent } from './newexam/home.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ReportComponent } from './report/report.component';

import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { StartSqlExamComponent } from './start-sql-exam/start-sql-exam.component';
import { StartcsharpexamComponent } from './csharpexam/startcsharpexam/startcsharpexam.component';
import { StartexamComponent } from './startexam/startexam.component';
import { Csharplevel2Component } from './csharpexam/csharplevel2/csharplevel2.component';
import { Csharplevel3Component } from './csharpexam/csharplevel3/csharplevel3.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
{path:"home",component:HomepageComponent},
{path:"userhome",component:HomeComponent},
{path:"Regisration",component:ExamRegistrationComponent},
{path:"login",component:LoginComponent},
{path:"about",component:AboutusComponent},
{path:"Resetpassword",component:ResetpasswordComponent},
{path:"exam",component:ExampageComponent},
{path:"startexam",component:StartexamComponent},
{path:"conductExam",component:ConductExamComponent},
{path:"Report",component:ReportComponent },
{path:"admin",component:AdminLoginComponent},
{path:"adminprofile",component:AdminProfileComponent},
{path:"searchstudent",component:SearchStudentComponent},
{path:"sqltest",component:StartSqlExamComponent},
{path:"csharp",component:StartcsharpexamComponent},
{path:"Addquestion",component:AddQuestionsComponent},
{path:"deletequetion",component:DeleteQuestionComponent},
{path:"csharplevel2",component:Csharplevel2Component},
{path:"csharpLevel3",component:Csharplevel3Component}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
