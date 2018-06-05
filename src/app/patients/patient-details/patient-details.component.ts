import { Component, OnInit, Input } from '@angular/core';
import { IPatient } from '../../shared/interfaces/IPatient';
import { PatientService } from '../../shared/services/patient.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  patients: IPatient[] = [];
  constructor(private _PatientService: PatientService) {
    this.patients = this._PatientService.patient;
  }

  ngOnInit() {
  }

}
