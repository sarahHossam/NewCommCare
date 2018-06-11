import { Component, OnInit, Input } from '@angular/core';
import { Idoctor } from '../../shared/interfaces/idoctor';
import { Doctorservice } from '../../shared/services/doctor.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {
  doctor: Idoctor;
  constructor(private docservice: Doctorservice, private activatedRoute: ActivatedRoute) {
    this.doctor = {
      id: activatedRoute.snapshot.params.id
    }
    console.log(this.doctor.id);
  }
  ngOnInit() {
    this.doctor = this.docservice.getById(this.doctor.id);
  }

}
