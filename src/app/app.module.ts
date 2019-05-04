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

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    AuthComponent
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
    MatButtonModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
