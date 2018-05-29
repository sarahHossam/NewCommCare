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

const doctorRoutes:Routes = [
  {path: "doctor-details", component: DoctorDetailsComponent},
  {path: "doctor-add", component: DoctorAddComponent},
  {path: "doctor-calender", component: DoctorCalendarComponent},
  {path: "doctor-listing", component: DoctorListingsComponent},
]
@NgModule({
  imports: [
    CommonModule,
    FullCalendarModule,
    RouterModule.forChild(doctorRoutes)
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
exports:[
  DoctorsComponent,
  DoctorCalendarComponent
],
providers:
[
  CalendarService,
]

})
export class DoctorsModule { }
