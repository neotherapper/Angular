import { NgModule } from '@angular/core';

import {
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatTableModule,
  MatTreeModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatTreeModule,
    MatIconModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule],
})
export class MaterialModule { }
