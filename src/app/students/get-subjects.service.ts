import { Injectable } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { Sub } from '../models/Subjects.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { and } from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
export class GetSubjectsService {

  subjectChanged = new Subject<Sub[]>();
  private availableSubjects: Subscription[] = [];
  filterTest: string;
  selectedid: string;

  csGeneral: boolean;
  cs4se: boolean;
  se3yr1sem: boolean;
  se4yr1sem: boolean;
  se4yr2sem: boolean;
  cs4cs: boolean;
  cs3yr1sem: boolean;
  cs4yr1sem: boolean;
  cs4yr2sem: boolean;


  constructor(private db: AngularFirestore, private afAuth: AngularFireAuth, private router: Router) {
  }

  // parseNanny
  parseSubjects() {
    this.afAuth.auth.onAuthStateChanged(subject => {
      if (subject) {
        this.selectedid = subject.uid;
      }
    });
  }


  // getSubjects
  getSubjects() {
    console.log('get subjects');
    /*this.availableSubjects.push(this.db
      .collection('bsc_cs')
      .valueChanges()
      .subscribe((subjects: Subject[]) => {
        this.subjectChanged.next(subjects);
      }));*/
    if (this.csGeneral === true) {
      this.db.collection('bsc_cs').valueChanges().
        subscribe((subs: Sub[]) => {
          this.subjectChanged.next(subs);
        });
      this.resetValues();
    }
    if (this.cs4cs === true && this.cs3yr1sem === true) {
      this.db.collection('bsc_cs_3yr1sem').valueChanges().
        subscribe((subs: Sub[]) => {
          this.subjectChanged.next(subs);
        });
      this.resetValues();
    }

    if (this.cs4cs === true && this.cs4yr1sem === true) {
      this.db.collection('bsc_cs_4yr1sem').valueChanges().
        subscribe((subs: Sub[]) => {
          this.subjectChanged.next(subs);
        });
      this.resetValues();
    }

    if (this.cs4cs === true && this.cs4yr2sem === true) {
      this.db.collection('bsc_cs_4yr2sem').valueChanges().
        subscribe((subs: Sub[]) => {
          this.subjectChanged.next(subs);
        });
      this.resetValues();
    }

    if (this.cs4se === true) {
      this.db.collection('bsc_se').valueChanges().
        subscribe((subs: Sub[]) => {
          this.subjectChanged.next(subs);
        });
      this.resetValues();
    }

    if (this.cs4se === true && this.se3yr1sem === true) {
      this.db.collection('bsc_se_3yr1sem').valueChanges().
        subscribe((subs: Sub[]) => {
          this.subjectChanged.next(subs);
        });
      this.resetValues();
    }

    if (this.cs4se === true && this.se4yr1sem === true) {
      this.db.collection('bsc_se_4yr1sem').valueChanges().
        subscribe((subs: Sub[]) => {
          this.subjectChanged.next(subs);
        });
      this.resetValues();
    }

    if (this.cs4se === true && this.se4yr2sem === true) {
      this.db.collection('bsc_se_4yr2sem').valueChanges().
        subscribe((subs: Sub[]) => {
          this.subjectChanged.next(subs);
        });
      this.resetValues();
    }
  }

  resetValues() {
    this.csGeneral = false;
    this.cs4se = false;
    this.se3yr1sem = false;
    this.se4yr1sem = false;
    this.se4yr2sem = false;
    this.cs4cs = false;
    this.cs3yr1sem = false;
    this.cs4yr1sem = false;
    this.cs4yr2sem = false;
  }

}
