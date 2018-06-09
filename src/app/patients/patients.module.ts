import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientAddComponent } from './patient-add/patient-add.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientItemSmallComponent } from './patient-item-small/patient-item-small.component';
import { PatientListingsComponent } from './patient-listings/patient-listings.component';
import { PatientsComponent } from './patients.component';
import { Routes, RouterModule } from '@angular/router';
import { MedicalHistoryModule } from '../medical-history/medical-history.module';

const routesPatient: Routes = [
  {
    path: 'patients',
    component: PatientsComponent,
    children: [
      {path: '', component: PatientListingsComponent},
      {path: 'patientdetails/:id',
      component: PatientDetailsComponent,
      children: [
        {path: 'patientAdd', component: PatientAddComponent}
      ]},
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    MedicalHistoryModule,
    RouterModule.forRoot(routesPatient)
  ],
  exports: [
    PatientsComponent,
    RouterModule
  ],
  declarations: [
    PatientsComponent,
    PatientAddComponent,
    PatientDetailsComponent,
    PatientItemSmallComponent,
    PatientListingsComponent]
})
export class PatientsModule { }
