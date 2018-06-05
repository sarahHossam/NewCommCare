import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsComponent } from './doctors.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { DoctorListingsComponent } from './doctor-listings/doctor-listings.component';
import { DoctorAddComponent } from './doctor-add/doctor-add.component';
import { DoctorItemSmallComponent } from './doctor-item-small/doctor-item-small.component';
import { DoctorCalendarComponent } from './doctor-calendar/doctor-calendar.component';
import { FullCalendarModule } from 'ng-fullcalendar';
import { RouterModule, Routes } from '@angular/router';
import { PrescriptionComponent } from '../prescription/prescription.component';
import { PrescriptionModule } from '../prescription/prescription.module';
import { Component } from '@angular/core/src/metadata/directives';

import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';
import { NgbModalModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarUtilsModule } from '../calendar-utils/calendar-utils.module';


@NgModule({
  imports: [
    CommonModule,
    FullCalendarModule,
    PrescriptionModule,
    CalendarUtilsModule,
    FormsModule,
    CalendarModule.forRoot(),
    NgbModalModule.forRoot(),
    RouterModule.forChild([
        {path:'listing',component:DoctorListingsComponent},
        {path: "doctorsProfile" ,component:DoctorsComponent,children :[
        {path:'', component: DoctorDetailsComponent },
        {path:'doctors', redirectTo:"/listing" ,pathMatch:'full'},
        {path:'add',component:DoctorAddComponent},
        {path:'calendar', component:DoctorCalendarComponent},
        {path:'prescription', component:PrescriptionComponent},
        {path:'prescription', component:PrescriptionComponent} 
      ]},

      { path: 'doctors/:categoryname', component: DoctorListingsComponent },
      { path: 'doctors', component: DoctorListingsComponent },
      { path: "doctorProfile/:id", component: DoctorsComponent, children: [
          { path: '', component: DoctorDetailsComponent },
          { path: 'ddoctors', component:DoctorListingsComponent },
          { path: 'add', component: DoctorAddComponent },
          { path: 'calendar', component: DoctorCalendarComponent },
          { path: 'prescription', component: PrescriptionComponent },
          
          
        ]
      },
    ])
  ],
  declarations:
    [
      DoctorsComponent,
      DoctorDetailsComponent,
      DoctorListingsComponent,
      DoctorAddComponent,
      DoctorItemSmallComponent,
      DoctorCalendarComponent
    ],
  exports: [
    DoctorsComponent,
    DoctorDetailsComponent,
    DoctorListingsComponent,
    DoctorAddComponent,
    DoctorItemSmallComponent,
    DoctorCalendarComponent
],
exports:[
  DoctorsComponent,
  RouterModule
],
})
export class DoctorsModule { }
