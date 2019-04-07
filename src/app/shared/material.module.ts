import { NgModule } from '@angular/core';

import {
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  exports: [
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule],
})
export class MaterialModule { }
