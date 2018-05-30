import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DoctorDetailsComponent } from './doctors/doctor-details/doctor-details.component';
import { DoctorListingsComponent } from './doctors/doctor-listings/doctor-listings.component';
import { DoctorItemSmallComponent } from './doctors/doctor-item-small/doctor-item-small.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { DepartmentsComponent } from './departments/departments.component';
import { HospitalHomeModule } from 'src/app/hospital-home/hospital-home.module';
import { HospitalHomeComponent } from 'src/app/hospital-home/hospital-home.component';
import { DoctorsModule } from './doctors/doctors.module';


@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    HospitalHomeModule,
    DoctorsModule,
    RouterModule.forRoot([
      { path:'home', component: HospitalHomeComponent},
      { path:'', redirectTo:'/home', pathMatch:'full'},
      
    ])
  ],
  declarations: [],
  exports:[ RouterModule]

})
export class AppRoutingModule { }
