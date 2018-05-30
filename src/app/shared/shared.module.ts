<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HospitalHeaderComponent } from './hospital-header/hospital-header.component';
/* import { HospitalComponent } from './hospital/hospital.component'; */
import { HospitalFooterComponent } from 'src/app/shared/hospital-footer/hospital-footer.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { DepartmentsModule } from '../departments/departments.module';
import { DoctorsModule } from '../doctors/doctors.module';
import { HospitalAboutUsComponent } from './hospital-About-Us/hospital-About-Us.component';
import { HospitalLoginComponent } from './hospital-login/hospital-login.component';

@NgModule({
  imports: [
    CommonModule,
    DepartmentsModule,
    RouterModule,
    DoctorsModule
  ],
  declarations: [
    MenuComponent,
    HospitalHeaderComponent, 
    HospitalFooterComponent,    ,
    HospitalAboutUsComponent,
    HospitalLoginComponent
],
exports:
[
  HospitalHeaderComponent, 
  HospitalFooterComponent,
]
})
export class SharedModule { }
=======
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HospitalHeaderComponent } from './hospital-header/hospital-header.component';
/* import { HospitalComponent } from './hospital/hospital.component'; */
import { HospitalFooterComponent } from 'src/app/shared/hospital-footer/hospital-footer.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { DepartmentsModule } from '../departments/departments.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DoctorsModule } from '../doctors/doctors.module';

@NgModule({
  imports: [
    CommonModule,
    DepartmentsModule,
    DoctorsModule,
    RouterModule.forChild([
      {path:'contactUs', component: ContactUsComponent}
    ])
  ],
  declarations: [
    MenuComponent,
    HospitalHeaderComponent, 
    HospitalFooterComponent, ContactUsComponent,    
],
exports:
[
  HospitalHeaderComponent, 
  HospitalFooterComponent,
]
})
export class SharedModule { }
>>>>>>> 52047956454f57885c30ea03bafa6bc88161279d
