import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import{FormsModule, ReactiveFormsModule} from  '@angular/forms';
import { HomeComponent } from './home/home.component';
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
import { QueAddRemoveComponent } from './AdminModule/que-add-remove/que-add-remove.component';
import { ViewReportComponent } from './AdminModule/view-report/view-report.component';
import { SearchStudentComponent } from './AdminModule/search-student/search-student.component';
import { SearchStudentService } from './Services/searchstudent.service';








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
        QueAddRemoveComponent,
        ViewReportComponent,
        SearchStudentComponent
   
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
  providers: [Registerservice,ConductExamService,SearchStudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
