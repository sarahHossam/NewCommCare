import { Component, OnInit } from '@angular/core';
import { Idoctor } from '../../shared/interfaces/idoctor';
import { Doctorservice } from '../../shared/services/doctor.service';

@Component({
  selector: 'app-doctor-listings',
  templateUrl: './doctor-listings.component.html',
  styleUrls: ['./doctor-listings.component.css']
})
export class DoctorListingsComponent implements OnInit {
  doctors:Idoctor[];
  constructor(private docservice:Doctorservice) { 
    this.doctors=docservice.getAll();
  }

  ngOnInit() {
  }

}
