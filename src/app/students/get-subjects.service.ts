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
  selectedid: string;

  constructor(private db: AngularFirestore, private afAuth: AngularFireAuth, private router: Router) {
  }

  // parseNanny
  parseSubjects() {
    this.afAuth.auth.onAuthStateChanged(subject => {
      if (subject) {
        this.selectedid = subject.uid;
      }});
  }


  // getNannies
  getSubjects() {
    console.log("get subjects");
    this.availableSubjects.push(this.db
      .collection('bsc_cs')
      .valueChanges()
      .subscribe((subjects: SubjectsModel[]) => {
        this.subjectChanged.next(subjects);
      }));
  }

}
