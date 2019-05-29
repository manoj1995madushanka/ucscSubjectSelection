import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { AdminStudentsComponent } from './admin-students/admin-students.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminSubjectsComponent } from './admin-subjects/admin-subjects.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminLoginComponent } from './admin-login/admin-login.component';

@NgModule({
  declarations: [AdminHomeComponent, SidebarComponent, AdminStudentsComponent, AdminDashboardComponent, AdminSubjectsComponent, AdminLoginComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
