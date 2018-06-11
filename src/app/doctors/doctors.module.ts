import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { FormsModule } from '@angular/forms';
 import { CalendarModule } from 'angular-calendar';
import { NgbModalModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarUtilsModule } from '../calendar-utils/calendar-utils.module';
import { EditCalendarComponent } from './doctor-calendar/edit-calendar/edit-calendar.component';
import { DoctorComponent } from './doctors.component';

@NgModule({
  imports: [
    CommonModule,
    FullCalendarModule,
    PrescriptionModule,
    DoctorCategoryModule,
    CalendarUtilsModule,
    FormsModule,
    CalendarModule.forRoot(),
     NgbModalModule.forRoot(),
    RouterModule.forChild([
        {path:'listing',component:DoctorListingsComponent},
        {path: "doctorsProfile" ,component:DoctorComponent,children :[
        {path:'', component: DoctorDetailsComponent },
        {path:'doctors', redirectTo:"/listing" ,pathMatch:'full'},
        {path:'add',component:DoctorAddComponent},
        {path:'calendar', component:DoctorCalendarComponent},
        {path:'prescription', component:PrescriptionComponent} 
      ]},
    ])
  ],

  declarations:
    [
     DoctorComponent,
      DoctorDetailsComponent,
      DoctorListingsComponent,
      DoctorAddComponent,
      DoctorItemSmallComponent,
      DoctorCalendarComponent,
       EditCalendarComponent
    ],

 exports:[
  DoctorComponent,
  DoctorCalendarComponent,
  RouterModule
],
providers:
[
  CalendarService,
]

})
export class DoctorsModule { }
