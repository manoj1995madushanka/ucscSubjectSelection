import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDividerModule,
        MatCardModule,MatCardTitle, MatButtonModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    MatDividerModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
