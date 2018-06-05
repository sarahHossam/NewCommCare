import { Component, OnInit } from '@angular/core';
import { IPatient } from '../../shared/interfaces/IPatient';
import { PatientService } from '../../shared/services/patient.service';


@Component({
  selector: 'app-patient-listings',
  templateUrl: './patient-listings.component.html',
  styleUrls: ['./patient-listings.component.css']
})
export class PatientListingsComponent implements OnInit {
 patients: IPatient[] = [];
  constructor(private _PatientService: PatientService) { }

  ngOnInit() {
    this.patients = this._PatientService.patient;
  }

}
