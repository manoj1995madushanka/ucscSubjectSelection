import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class BscCsService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  removeSubject(id: string) {
    return this.http.delete(`http://localhost:8080/admin/subject/bsccs/${id}`,
      { headers: { Authorization: `Bearer ${this.auth.getToken()}` } });
  }

  saveSubject(values) {
    return this.http.put(`http://localhost:8080/admin/subject/bsccs/${values._id}`, values,
      { headers: { Authorization: `Bearer ${this.auth.getToken()}` } });
  }

  addSubject(values) {
    return this.http.post('http://localhost:8080/admin/subject/bsccs', values,
      { headers: { Authorization: `Bearer ${this.auth.getToken()}` } });
  }

  getSubjects() {
    return this.http.get('http://localhost:8080/admin/subject/bsccs',
      { headers: { Authorization: `Bearer ${this.auth.getToken()}` } });
  }
}
