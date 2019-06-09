import { Component, OnInit } from '@angular/core';
import {GetSubjectsService} from '../get-subjects.service';

@Component({
  selector: 'app-his-select-year-sem',
  templateUrl: './his-select-year-sem.component.html',
  styleUrls: ['./his-select-year-sem.component.css']
})
export class HisSelectYearSemComponent implements OnInit {

  constructor(private selectSubs : GetSubjectsService) { }

  ngOnInit() {
  }

  changeDataSourseCS3yr1Sem() {
    this.selectSubs.cs3yr1sem = true;
    console.log(this.selectSubs.cs3yr1sem);
  }

  changeDataSourseCS4yr1Sem() {
    this.selectSubs.cs4yr1sem = true;
    console.log(this.selectSubs.cs4yr1sem);
  }

  changeDataSourseCS4yr2Sem() {
    this.selectSubs.cs4yr2sem = true;
    console.log(this.selectSubs.cs4yr2sem);
  }

}
