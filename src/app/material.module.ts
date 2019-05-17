import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatDividerModule,
  MatCardModule, MatCardTitle, MatButtonModule, MatTableModule, MatSortModule, MatPaginatorModule, MatBottomSheetModule, MatFormFieldModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatBottomSheetModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatBottomSheetModule,
    MatFormFieldModule
  ]
})
export class MaterialModule { }
