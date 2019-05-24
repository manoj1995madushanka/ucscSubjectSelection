import { Injectable } from '@angular/core';
import {Subject, Subscription} from 'rxjs';
import {SubjectsModel} from '../models/Subjects.model';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GetSubjectsService {

  subjectChanged = new Subject<SubjectsModel[]>();
  private availableSubjects: Subscription[] = [];
  filterTest: string;
  selectedid: string;

  csGeneral: boolean;
  cs4se: boolean;
  cs4se1sem: boolean;
  cs4se2sem: boolean;
  cs4cs: boolean;
  cs4cs1sem: boolean;
  cs4cs2sem: boolean;

  constructor(private db: AngularFirestore, private afAuth: AngularFireAuth, private router: Router) {
  }

  // parseNanny
  parseSubjects() {
    this.afAuth.auth.onAuthStateChanged(subject => {
      if (subject) {
        this.selectedid = subject.uid;
      }});
  }


  // getSubjects
  getSubjects() {
    console.log('get subjects');
    /*this.availableSubjects.push(this.db
      .collection('bsc_cs')
      .valueChanges()
      .subscribe((subjects: SubjectsModel[]) => {
        this.subjectChanged.next(subjects);
      }));*/
    this.db.collection('bsc_cs').valueChanges().
      subscribe((subs: SubjectsModel[]) => {
        this.subjectChanged.next(subs);
    });
  }

}
