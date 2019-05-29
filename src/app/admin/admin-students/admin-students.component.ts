import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-students',
  templateUrl: './admin-students.component.html',
  styleUrls: ['./admin-students.component.sass']
})
export class AdminStudentsComponent implements OnInit {

  studentForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createStudentForm();
  }

  addStudent(values) {
    if (this.studentForm.invalid) {
      // return;
    }
    console.log(values);
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
