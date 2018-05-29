import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DoctorDetailsComponent } from './doctors/doctor-details/doctor-details.component';
import { DoctorListingsComponent } from './doctors/doctor-listings/doctor-listings.component';
import { DoctorItemSmallComponent } from './doctors/doctor-item-small/doctor-item-small.component';
import { AppComponent } from './app.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([{ path:'', component: AppComponent}])
  ],
  declarations: [],
  exports:[ RouterModule]

})
export class AppRoutingModule { }
