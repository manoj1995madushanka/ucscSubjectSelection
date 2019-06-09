import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { RouterModule } from '@angular/router';
import { RoutingModule } from './routing.module';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { MaterialModule } from './material.module';
import { CsSelectYearSemComponent } from './students/cs-select-year-sem/cs-select-year-sem.component';
import { CsGeneralComponent } from './students/cs-general/cs-general.component';
import { SeSelectYearSemComponent } from './students/se-select-year-sem/se-select-year-sem.component';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { IsGeneralComponent } from './students/is-general/is-general.component';
import { HcsComponent } from './students/hcs/hcs.component';
import { HseComponent } from './students/hse/hse.component';
import { HisComponent } from './students/his/his.component';
import { HisSelectYearSemComponent } from './students/his-select-year-sem/his-select-year-sem.component';
import { Hcs4yr1semComponent } from './students/hcs4yr1sem/hcs4yr1sem.component';
import { Hcs4yr2semComponent } from './students/hcs4yr2sem/hcs4yr2sem.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    // AuthComponent,
    CsSelectYearSemComponent,
    CsGeneralComponent,
    SeSelectYearSemComponent,
    IsGeneralComponent,
    HcsComponent,
    HseComponent,
    HisComponent,
    HisSelectYearSemComponent,
    Hcs4yr1semComponent,
    Hcs4yr2semComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AuthModule,
    AdminModule,
    RoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    RouterModule,
    AngularFireStorageModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
