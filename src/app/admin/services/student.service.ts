import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Student } from 'src/app/models/Student.model';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  unassignSubject(student, subject) {
    return this.http.put(`http://localhost:8080/admin/student/subject`, { student, subject },
      { headers: { Authorization: `Bearer ${this.auth.getToken()}` } });
  }

  assignSubject(student, subject) {
    return this.http.post(`http://localhost:8080/admin/student/subject`, { student, subject },
      { headers: { Authorization: `Bearer ${this.auth.getToken()}` } });
  }

  elegibleSubjects(course: string) {
    return this.http.get(`http://localhost:8080/admin/student/subject/${course}`,
      { headers: { Authorization: `Bearer ${this.auth.getToken()}` } });
  }

  removeStudent(id: string) {
    return this.http.delete(`http://localhost:8080/admin/student/${id}`,
      { headers: { Authorization: `Bearer ${this.auth.getToken()}` } });
  }

  updateStudent(values: Student) {
    return this.http.put(`http://localhost:8080/admin/student/${values.index}`, values,
      { headers: { Authorization: `Bearer ${this.auth.getToken()}` } });
  }

  addStudent(values: Student) {
    return this.http.post(`http://localhost:8080/admin/student`, values,
      { headers: { Authorization: `Bearer ${this.auth.getToken()}` } });
  }

  getStudent(id: string) {
    return this.http.get(`http://localhost:8080/admin/student/${id}`, { headers: { Authorization: `Bearer ${this.auth.getToken()}` } });
  }
  getStudents() {
    return this.http.get('http://localhost:8080/admin/student',
      { headers: { Authorization: `Bearer ${this.auth.getToken()}` } });
  }
}
