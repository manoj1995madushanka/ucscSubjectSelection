import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminStudentsComponent } from './admin-students/admin-students.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminSubjectsComponent } from './admin-subjects/admin-subjects.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminGuard } from './admin.guard';
import { BscCsComponent } from './subjects/bsc-cs/bsc-cs.component';

const routes: Routes = [
  // {
  //   path: 'admin/login',
  //   component: AdminLoginComponent,
  // },
  {
    path: 'admin',
    component: AdminHomeComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        redirectTo: '/admin/(admin:dashboard)',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: AdminDashboardComponent,
        outlet: 'admin'
      },
      {
        path: 'students',
        component: AdminStudentsComponent,
        outlet: 'admin',
      },
      {
        path: 'subjects',
        component: AdminSubjectsComponent,
        outlet: 'admin'
      },
      {
        path: 'subjects-bsc-cs',
        component: BscCsComponent,
        outlet: 'admin'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }