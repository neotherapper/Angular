import { NgModule } from '@angular/core';

import {
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatTableModule,
  MatTreeModule,
  MatDialogModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatTreeModule,
    MatIconModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule
  ],
  exports: [
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule],
})
export class MaterialModule { }
