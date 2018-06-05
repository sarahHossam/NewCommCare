import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicalHistoryComponent } from './medical-history.component';
import { MedicalHistoryAddComponent } from './medical-history-add/medical-history-add.component';
import { MedicalHistoryListingComponent } from './medical-history-listing/medical-history-listing.component';
import { MedicalHistoryDetailsComponent } from './medical-history-details/medical-history-details.component';
import { MedicalHistoryItemSmallComponent } from './medical-history-item-small/medical-history-item-small.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MedicalHistoryComponent, MedicalHistoryAddComponent, MedicalHistoryListingComponent, MedicalHistoryDetailsComponent, MedicalHistoryItemSmallComponent]
})
export class MedicalHistoryModule { }
