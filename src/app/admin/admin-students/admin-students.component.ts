import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { Student } from 'src/app/models/Student.model';

@Component({
  selector: 'app-admin-students',
  templateUrl: './admin-students.component.html',
  styleUrls: ['./admin-students.component.sass']
})
export class AdminStudentsComponent implements OnInit {

  studentForm: FormGroup;
  students: Student[];

  constructor(private fb: FormBuilder, private studentService: StudentService) { }

  ngOnInit() {
    this.createStudentForm();
    this.studentService.getStudents().subscribe(res => {
      this.students = [];

      res.forEach(doc => {
        const student: Student = {
          id: doc.payload.doc.id,
          index: doc.payload.doc.data()['index'],
          name: doc.payload.doc.data()['name'],
          regNo: doc.payload.doc.data()['regNo']
        };
        this.students.push(student);
      });
    });
  }
  removeStudent(id) {
    this.studentService.removeStudent(id).then(res => {
      console.log('removed ' + id);
    });
  }

  saveStudent(values) {
    this.studentService.updateStudent(values).then(res => {
      console.log(values);
    });
  }

  addStudent(values) {
    if (this.studentForm.invalid) {
      return;
    }
    this.studentService.addStudent(values).then(res => {
      this.studentForm.reset();
    });
  }

  createStudentForm() {
    this.studentForm = this.fb.group({
      index: ['', Validators.required],
      name: ['', Validators.required],
      regNo: ['', Validators.required],
    });
  }

  get index() {
    return this.studentForm.get('index');
  }
  get name() {
    return this.studentForm.get('name');
  }
  get regNo() {
    return this.studentForm.get('regNo');
  }

}
