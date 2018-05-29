import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DoctorDetailsComponent } from './doctors/doctor-details/doctor-details.component';
import { DoctorListingsComponent } from './doctors/doctor-listings/doctor-listings.component';
import { DoctorItemSmallComponent } from './doctors/doctor-item-small/doctor-item-small.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';

@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    RouterModule.forRoot([
      { path:'home', component: HomeComponent},
      { path:'', redirectTo:'/home', pathMatch:'full'},
    ])
  ],
  declarations: [],
  exports:[ RouterModule]

})
export class AppRoutingModule { }
