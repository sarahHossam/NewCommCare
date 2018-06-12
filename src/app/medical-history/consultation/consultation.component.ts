import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent implements OnInit {

  @Input() patientFName: string;
  @Input() patientLName: string;

  constructor() { }

  ngOnInit() {
  }

}
