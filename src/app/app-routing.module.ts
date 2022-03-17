import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { Resume2Component } from './resume2/resume2.component';


const routes: Routes = [

{ path: "", component: HomeComponent},
{ path: "resume", component: ResumeComponent},
{ path: "resume2", component: Resume2Component},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
