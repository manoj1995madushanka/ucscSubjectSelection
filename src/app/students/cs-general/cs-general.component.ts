import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Sub } from '../../models/Subjects.model';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { GetSubjectsService } from '../get-subjects.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-cs-general',
  templateUrl: './cs-general.component.html',
  styleUrls: ['./cs-general.component.sass']
})
export class CsGeneralComponent implements OnInit {

  displayedColumns = ['courseCode', 'courseName', 'credits', 'availability'];
  dataSource = new MatTableDataSource<Sub>();
  private nChangedSubscription: Subscription;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private getSubjects: GetSubjectsService,
    private router: Router,
    public db: AngularFirestore) {

  }

  ngOnInit() {
    this.getSubjects.getSubjects();
    this.nChangedSubscription = this.getSubjects.subjectChanged.subscribe((sub: Sub[]) => {
      this.dataSource.data = sub;
    });
    /*this.nChangedSubscription = this.getSubjects.subjectChanged.subscribe(
      (subjects: SubjectsModel[]) => {
        this.dataSource.data = subjects;
      }
    );
    this.getSubjects.getSubjects();
    this.selectedJob = this.getSubjects.filterTest;
    this.dataSource.filter = this.selectedJob;*/
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy() {
    this.nChangedSubscription.unsubscribe();
  }

  /*goProfile(nanny) {
    console.log(nanny.Id);
    console.log("current id "+ this.authS.currentUserID);
    this.authS.selectedUserName = nanny.name;
    this.authS.selectedUserDoc = this.db.collection('nanny').doc(nanny.Id);
    this.router.navigate(['/ntable/nprofile', nanny.name]);
    this.trainingService.toProfile(nanny);
  }*/
}
