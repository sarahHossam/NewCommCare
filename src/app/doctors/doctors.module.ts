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

@NgModule({
  imports: [
    CommonModule,
    FullCalendarModule,
    RouterModule.forChild([
      {path: "Home", children :[
        {path:'', component: DoctorListingsComponent },
        {path:'profile/:id',component:DoctorDetailsComponent},
        {path:'add',component:DoctorAddComponent},
        {path:'calendar', component:DoctorCalendarComponent},
        // {path:'Home/:id', component:DoctorsComponent}
        
      ]},
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
exports:[
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
