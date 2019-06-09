import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import {BscCsService} from '../../admin/services/bsc-cs.service';
import {StudentService} from '../../admin/services/student.service';
import {AuthService} from '../../auth/auth.service';
import {Sub} from '../../models/Subjects.model';

@Component({
  selector: 'app-hcs4yr1sem',
  templateUrl: './hcs4yr1sem.component.html',
  styleUrls: ['./hcs4yr1sem.component.sass']
})
export class Hcs4yr1semComponent implements OnInit {

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
