import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentsComponent } from './departments.component';
import { ListingComponent } from './department-listing/listing.component';
import { DetailsComponent } from './department-details/details.component';
import { AddComponent } from './department-add/add.component';
import { DepartmentItemSmallComponent } from './department-item-small/department-item-small.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:ListingComponent},
      {path:"details/:id",component:DetailsComponent},
      {path:"add",component:AddComponent}
    ])
  ],
  declarations: [
    ListingComponent, 
    DetailsComponent, 
    AddComponent, 
    DepartmentItemSmallComponent,
    DepartmentsComponent
  ],
  exports:[
    DepartmentsComponent
  ]
})
export class DepartmentsModule { }
