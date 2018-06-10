import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsComponent } from './doctors.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { DoctorListingsComponent } from './doctor-listings/doctor-listings.component';
import { DoctorAddComponent } from './doctor-add/doctor-add.component';
import { DoctorItemSmallComponent } from './doctor-item-small/doctor-item-small.component';
import { DoctorCalendarComponent } from './doctor-calendar/doctor-calendar.component';
import { FullCalendarModule } from 'ng-fullcalendar';
import { CalendarService } from '../shared/Services/CalendarService/Calendar.service';
import { RouterModule, Routes } from '@angular/router';
import { PrescriptionComponent } from '../prescription/prescription.component';
import { PrescriptionModule } from '../prescription/prescription.module';
import { Component } from '@angular/core/src/metadata/directives';
import { DoctorCategoryModule } from '../doctorCategory/doctorCategory.module';


@NgModule({
  imports: [
    CommonModule,
    FullCalendarModule,
    PrescriptionModule,
    DoctorCategoryModule,
    RouterModule.forChild([
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
    DoctorCalendarComponent,
    RouterModule
  ],
  providers:
    [
      CalendarService,
    ]

})
export class DoctorsModule { }
