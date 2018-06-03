import { Component, OnInit, Input } from '@angular/core';
import { Idoctor } from '../../shared/interfaces/idoctor';
import { Doctorservice } from '../../shared/services/doctor.service';
import { Category } from '../../shared/interfaces/icategory';
import { DoctorcategoryService } from '../../shared/services/doctorcategory.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctor-listings',
  templateUrl: './doctor-listings.component.html',
  styleUrls: ['./doctor-listings.component.css']
})
export class DoctorListingsComponent implements OnInit {
  @Input() doctors:Idoctor[];
  category:Category;
   constructor(private docservice:Doctorservice, private activeRoute: ActivatedRoute) { 
    this.category = new Category();
    console.log(this.category);
    this.activeRoute.queryParams.subscribe((params) => {
      console.log(params)
      this.category.categoryname = params['categoryname'];
      console.log(this.category.categoryname);
      // if(this.category.categoryname){
      //   this.doctors = this.docservice.getBySpeciality(this.category.categoryname)
      // }
      // else{
      //   this.doctors = this.docservice.getAll();
      // }
      // console.log(this.doctors);
    });
  }
  
  ngOnInit() {
    
  }

}
