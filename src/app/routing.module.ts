import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {StudentsComponent} from './students/students.component';
import {CsSelectYearSemComponent} from './students/cs-select-year-sem/cs-select-year-sem.component';

const routes: Routes = [
  {path: '', component: StudentsComponent},
  {path: 'selectyearandsemester', component:  CsSelectYearSemComponent}
  ]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
