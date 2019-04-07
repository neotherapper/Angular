import { NgModule, ModuleWithProviders } from '@angular/core';

import { SharedModule } from '../shared';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const adminRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'admin',
    component: AdminComponent
  }
]);

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    adminRouting,
    SharedModule
  ],
  providers: []
})
export class AdminModule { }
