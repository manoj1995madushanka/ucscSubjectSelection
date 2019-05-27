import { Component, OnInit } from '@angular/core';
import {GetSubjectsService} from '../get-subjects.service';

@Component({
  selector: 'app-se-select-year-sem',
  templateUrl: './se-select-year-sem.component.html',
  styleUrls: ['./se-select-year-sem.component.css']
})
export class SeSelectYearSemComponent implements OnInit {

  constructor(private datasource : GetSubjectsService) { }

  ngOnInit() {
  }

  changeDataSourseSE3yr1Sem() {
    this.datasource.se3yr1sem = true;
    console.log(this.datasource.se3yr1sem);
  }

  changeDataSourseSE4yr1Sem() {
    this.datasource.se4yr1sem = true;
    console.log(this.datasource.se4yr1sem);
  }

  changeDataSourseSE4yr2Sem() {
    this.datasource.se4yr2sem = true;
    console.log(this.datasource.se4yr2sem);
  }

}
