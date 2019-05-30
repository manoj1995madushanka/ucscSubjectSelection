import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Student } from 'src/app/models/Student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private afs: AngularFirestore) { }


  removeStudent(id: string) {
    return this.afs.doc(`Students/${id}`).delete();
  }

  updateStudent(values: Student) {
    return this.afs.doc(`Students/${values.id}`).update(values);
  }

  addStudent(values: Student) {
    return this.afs.collection('Students').add(values);
  }

  getStudents() {
    return this.afs.collection('Students').snapshotChanges();
  }
}
