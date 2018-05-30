import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DepartmentsComponent } from './departments/departments.component';
import { HospitalHomeModule } from 'src/app/hospital-home/hospital-home.module';
import { HospitalHomeComponent } from 'src/app/hospital-home/hospital-home.component';
import { DoctorsModule } from './doctors/doctors.module';
import { DepartmentsModule } from './departments/departments.module';


@NgModule({
  imports: [
    CommonModule,
    HospitalHomeComponent,
    DepartmentsModule,
    DoctorsModule,
    RouterModule.forRoot([
      { path:'home', component: HospitalHomeComponent},
      { path:'', redirectTo:'/home', pathMatch:'full'}

    ])
  ],
  declarations: [HospitalHomeComponent],
  exports:[ RouterModule]

})
export class AppRoutingModule { }
