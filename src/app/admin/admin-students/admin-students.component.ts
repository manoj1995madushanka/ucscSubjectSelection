import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { Student } from 'src/app/models/Student.model';
import { Sub } from 'src/app/models/Subjects.model';

@Component({
  selector: 'app-admin-students',
  templateUrl: './admin-students.component.html',
  styleUrls: ['./admin-students.component.sass']
})
export class AdminStudentsComponent implements OnInit {

  studentForm: FormGroup;
  students: any;
  subjects: any;
  selectedStudent: Student;
  selectedSub: Sub;

  constructor(private fb: FormBuilder, private studentService: StudentService) { }

  ngOnInit() {
    this.createStudentForm();
    this.studentService.getStudents().subscribe(res => {
      this.students = res;
    });
  }

  unassignSub(sub) {
    this.studentService.unassignSubject(this.selectedStudent, sub).subscribe(res => {
      this.selectedStudent.subjects.forEach((ele, i) => {
        if (ele.code === sub.code) {
          this.selectedStudent.subjects.splice(i, 1);
        }
      });
    });

  }

  assignSubject() {
    this.studentService.assignSubject(this.selectedStudent, this.selectedSub).subscribe(res => {
      this.selectedStudent.subjects.push(this.selectedSub);
    });
  }

  selectStudent(student) {
    this.selectedStudent = student;
    this.studentService.elegibleSubjects(student.course).subscribe(res => {
      this.subjects = res;
      this.selectedSub = this.subjects[0];
    });
  }
  removeStudent(id) {
    this.studentService.removeStudent(id).toPromise().then((data) => {
      this.students.forEach((student, i) => {
        if (student.index === id) {
          this.students.splice(i, 1);
        }
      });
      console.log(data);
    });
  }

  saveStudent(values) {
    this.studentService.updateStudent(values).subscribe((res) => {
      console.log(res);
    });
  }

  addStudent(values) {
    if (this.studentForm.invalid) {
      return;
    }
    this.studentService.addStudent(values).subscribe(res => {
      this.students.push(res);
      this.studentForm.reset();
    });
  }

  createStudentForm() {
    this.studentForm = this.fb.group({
      index: ['', Validators.required],
      email: ['', Validators.email],
      name: ['', Validators.required],
      regNo: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get index() {
    return this.studentForm.get('index');
  }
  get email() {
    return this.studentForm.get('email');
  }
  get name() {
    return this.studentForm.get('name');
  }
  get regNo() {
    return this.studentForm.get('regNo');
  }
  get password() {
    return this.studentForm.get('password');
  }

}
