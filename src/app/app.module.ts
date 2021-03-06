import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import{FormsModule, ReactiveFormsModule} from  '@angular/forms';
import { HomeComponent } from './newexam/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ExampageComponent } from './exampage/exampage.component';
import { StartexamComponent } from './startexam/startexam.component'

import { Registerservice } from './Services/Registration.service';

import { ExamRegistrationComponent } from './exam-registration/exam-registration.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ConductExamComponent } from './conduct-exam/conduct-exam.component';
import { ConductExamService } from './Services/conductExam.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import{MatFormFieldModule} from '@angular/material/form-field'; 

import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { AdminLoginComponent } from './AdminModule/admin-login/admin-login.component';
import { ReportComponent } from './report/report.component';
import { AdminProfileComponent } from './AdminModule/admin-profile/admin-profile.component';

import { ViewReportComponent } from './AdminModule/view-report/view-report.component';
import { SearchStudentComponent } from './AdminModule/search-student/search-student.component';
import { SearchStudentService } from './Services/searchstudent.service';
import { StartSqlExamComponent } from './start-sql-exam/start-sql-exam.component';
import { StartcsharpexamComponent } from './csharpexam/startcsharpexam/startcsharpexam.component';
import { AddQuestionsComponent } from './AdminModule/add-questions/add-questions.component';
import { AddQuesionService } from './Services/addquestion.service';

import { DeleteQuestionComponent } from './AdminModule/delete-question/delete-question.component';
import { DeleteQuestionService } from './Services/deletequestion.service';
import { Levelexam2Component } from './levelexam2/levelexam2.component';
import { HomepageComponent } from './homepage/homepage.component';
import { userLogin } from './Services/userLogin.service';
import { Csharplevel2Component } from './csharpexam/csharplevel2/csharplevel2.component';
import { charpleveiiExamService } from './Services/csharplevel2.service';
import { Csharplevel3Component } from './csharpexam/csharplevel3/csharplevel3.component';
import { charplevelIIIExamService } from './Services/charpexamthird.service';
import { csharplevelIExamService } from './Services/csharplevel1.service';









@NgModule({
  declarations: [
    AppComponent,
   
    HomeComponent,
    AboutusComponent,
    LoginComponent,
    ResetpasswordComponent,
    ExampageComponent,
    StartexamComponent,
   
    ExamRegistrationComponent,
        ConductExamComponent,
        AdminLoginComponent,
        ReportComponent,
        AdminProfileComponent,
        
        ViewReportComponent,
        SearchStudentComponent,
        StartSqlExamComponent,
        StartcsharpexamComponent,
        AddQuestionsComponent,
        
        DeleteQuestionComponent,
        Levelexam2Component,
        HomepageComponent,
        Csharplevel2Component,
        Csharplevel3Component
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatIconModule
   
    
  ],
  providers: [Registerservice,ConductExamService,SearchStudentService,AddQuesionService,
    DeleteQuestionService,userLogin,charpleveiiExamService,charplevelIIIExamService,csharplevelIExamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
