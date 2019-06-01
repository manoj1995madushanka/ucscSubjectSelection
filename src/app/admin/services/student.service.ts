import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Student } from 'src/app/models/Student.model';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }


  removeStudent(id: string) {
    return this.http.delete(`http://localhost:8080/admin/student/${id}`);
  }

  updateStudent(values: Student) {
    return this.http.put(`http://localhost:8080/admin/student/${values.index}`, values);
  }

  addStudent(values: Student) {
    return this.http.post(`http://localhost:8080/admin/student`, values);
  }

  getStudents() {
    return this.http.get('http://localhost:8080/admin/student');

  }
}
