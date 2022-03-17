import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ExamRegistrationComponent } from './exam-registration/exam-registration.component';
import { ExampageComponent } from './exampage/exampage.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { StartexamComponent } from './startexam/startexam.component';

const routes: Routes = [
{path:'home',component:HomeComponent},
{path:'Regisration',component:ExamRegistrationComponent},
{path:'login',component:LoginComponent},
{path:'about',component:AboutusComponent},
{path:'Resetpassword',component:ResetpasswordComponent},
{path:'exam',component:ExampageComponent},
{path:'startexam',component:StartexamComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
