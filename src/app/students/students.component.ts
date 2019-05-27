import { Component, OnInit } from '@angular/core';
import {GetSubjectsService} from './get-subjects.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(private getSubs: GetSubjectsService) { }

  ngOnInit() {
  }

  changeDataSourseCSGen() {
    this.getSubs.csGeneral = true;
    console.log(this.getSubs.csGeneral);
  }

  changeDataSourseCS4SE() {
    this.getSubs.cs4se = true;
    console.log(this.getSubs.cs4se);
  }

  changeDataSourseCS4CS() {
    this.getSubs.cs4cs = true;
  }

}
