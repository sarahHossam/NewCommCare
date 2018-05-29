import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HospitalHeaderComponent } from './hospital-header/hospital-header.component';
/* import { HospitalComponent } from './hospital/hospital.component'; */
import { HospitalFooterComponent } from 'src/app/shared/hospital-footer/hospital-footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HospitalHeaderComponent, HospitalFooterComponent]
})
export class SharedModule { }
