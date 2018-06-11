import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { CarouselModule } from 'ngx-bootstrap';
import { SystemHomeComponent } from './system-home.component';
import { PackagesComponent } from './packages/packages.component';
import { DoctorsModule } from '../doctors/doctors.module';
import { HospitalsModule } from '../hospitals/hospitals.module';


@NgModule({
  imports: [
    CommonModule,
    CarouselModule.forRoot(),
    DoctorsModule,
    HospitalsModule
    

  ],
  declarations: [SliderComponent,
    SystemHomeComponent,
    PackagesComponent
],
exports:[
  SystemHomeComponent,
  SliderComponent
  
]
})
export class SystemHomeModule { }
