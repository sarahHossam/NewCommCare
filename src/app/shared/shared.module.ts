import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HospitalHeaderComponent } from './hospital-header/hospital-header.component';
/* import { HospitalComponent } from './hospital/hospital.component'; */
import { HospitalFooterComponent } from 'src/app/shared/hospital-footer/hospital-footer.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { DepartmentsModule } from '../departments/departments.module';

@NgModule({
  imports: [
    CommonModule,
    DepartmentsModule,
    RouterModule
  ],
  declarations: [
    MenuComponent,
    HospitalHeaderComponent, 
    HospitalFooterComponent,    
],
exports:
[
  HospitalHeaderComponent, 
    HospitalFooterComponent,
]
})
export class SharedModule { }
