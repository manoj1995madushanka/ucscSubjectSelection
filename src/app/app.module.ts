import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { AuthComponent } from './auth/auth.component';
import {RouterModule} from '@angular/router';
import {RoutingModule} from './routing.module';
import {environment} from '../environments/environment';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {MaterialModule} from './material.module';
import { CsSelectYearSemComponent } from './students/cs-select-year-sem/cs-select-year-sem.component';
import { CsGeneralComponent } from './students/cs-general/cs-general.component';
import { SeSelectYearSemComponent } from './students/se-select-year-sem/se-select-year-sem.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    AuthComponent,
    CsSelectYearSemComponent,
    CsGeneralComponent,
    SeSelectYearSemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
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
