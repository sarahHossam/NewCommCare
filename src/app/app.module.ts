import { BrowserModule } from '@angular/platform-browser';
import { NgModule , OnInit } from '@angular/core';
import { AppComponent } from './app.component';
import { EventsModule } from './events/events.module';
import { FooterComponent } from './shared/footer-content/footer.component';
import { HeaderComponent } from './shared/header-content/header.component';
import { DepartmentService } from 'src/app/shared/services/department.service';
import { DepartmentsModule} from 'src/app/departments/departments.module';
import { DoctorsModule } from './doctors/doctors.module';
import { DepartmentsComponent } from 'src/app/departments/departments.component';
import { HospitalHeaderComponent } from 'src/app/shared/hospital-header/hospital-header.component';
import { HospitalFooterComponent } from 'src/app/shared/hospital-footer/hospital-footer.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { PatientService } from './shared/services/patient.service';
import { PatientsModule } from './patients/patients.module';
import { MedicalHistoryModule } from './medical-history/medical-history.module';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { InitialPhysicianAssesmentService } from './shared/services/MedicalHistoryService/InitialPhysicianAssesment.service';
import { HPService } from './shared/services/MedicalHistoryService/hp.service';
import { ConsultationService } from './shared/services/MedicalHistoryService/consultation.service';
import { AdmissionService } from './shared/services/MedicalHistoryService/admission.service';
import { PhysicianService } from './shared/services/MedicalHistoryService/physician.service';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EventsModule,
    DepartmentsModule,
    DoctorsModule,
    PatientsModule,
    MedicalHistoryModule,
    AccordionModule.forRoot(),
    SharedModule
    // RouterModule.forRoot([
    //   {path:'',component:DepartmentsComponent}
    // ])
   ],

  providers: [
    DepartmentService,
    PatientService,
    InitialPhysicianAssesmentService,
    HPService,
    ConsultationService,
    AdmissionService,
    PhysicianService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
