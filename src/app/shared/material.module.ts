import { NgModule } from '@angular/core';

import {
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatTableModule,
  MatTreeModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatSelectModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatTreeModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule],
})
export class MaterialModule { }
