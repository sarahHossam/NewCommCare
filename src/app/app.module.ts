import { BrowserModule } from '@angular/platform-browser';
import { NgModule , OnInit } from '@angular/core';
import { AppComponent } from './app.component';
import { EventsModule } from './events/events.module';
import { FooterComponent } from './shared/footer-content/footer.component';
import { HeaderComponent } from './shared/header-content/header.component';
import { DepartmentService } from 'src/app/shared/services/department.service';
import { DepartmentsModule} from 'src/app/departments/departments.module'
import { DoctorsModule } from './doctors/doctors.module';
import { DepartmentsComponent } from 'src/app/departments/departments.component';
import { HospitalHeaderComponent } from 'src/app/shared/hospital-header/hospital-header.component';
import { HospitalFooterComponent } from 'src/app/shared/hospital-footer/hospital-footer.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { Doctorservice } from './shared/services/doctor.service';
import { HospitalHomeComponent } from './hospital-home/hospital-home.component';



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
    SharedModule
  
   ],

  providers: [DepartmentService, Doctorservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
