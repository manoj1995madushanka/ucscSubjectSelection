import { Component, OnInit, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Sub } from '../../models/Subjects.model';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { GetSubjectsService } from '../get-subjects.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { BscCsComponent } from 'src/app/admin/subjects/bsc-cs/bsc-cs.component';
import { BscCsService } from 'src/app/admin/services/bsc-cs.service';
import { AuthService } from 'src/app/auth/auth.service';
import { StudentService } from 'src/app/admin/services/student.service';
import { Student } from 'src/app/models/Student.model';

@Component({
  selector: 'app-cs-general',
  templateUrl: './cs-general.component.html',
  styleUrls: ['./cs-general.component.sass']
})
export class CsGeneralComponent implements OnInit {

  displayedColumns = ['courseCode', 'courseName', 'credits', 'availability'];
  selectedJob: string;

  subjects = [];
  allSubs = [];
  student;
  subs = [];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private getSubjects: BscCsService,
    private studentService: StudentService,
    private auth: AuthService) { }

  ngOnInit() {
    console.log(this.auth.getUserDetails());

    this.getSubjects.getSubjects().subscribe((res: Sub[]) => {
      this.allSubs = res;
      this.subjects = res.filter(sub => sub.availability === 'optional');
    });
    this.studentService.getStudent(this.auth.getUserDetails()._id).subscribe(res => {
      this.student = res;
      console.log(this.student);
      this.student.subjects.push(this.allSubs.filter(sub => sub.availability === 'compulsory')[0]);
    });
  }
  assignSub(subject: Sub) {
    this.studentService.assignSubject(this.auth.getUserDetails(), subject).subscribe(res => {
      this.student.subjects.push(subject);
      this.subjects.forEach((ele, i) => {
        if (ele.code === subject.code) {
          this.subjects.splice(i, 1);
        }
      });
    });
  }
  unassignSub(sub) {
    this.studentService.unassignSubject(this.auth.getUserDetails(), sub).subscribe(res => {
      this.subjects.push(sub);

      this.student.subjects.forEach((ele, i) => {
        if (ele.code === sub.code) {
          this.student.subjects.splice(i, 1);
        }
      });
    });
  }
}
