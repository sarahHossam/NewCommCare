import { Component, OnInit,Input } from '@angular/core';
import { Idoctor } from '../shared/interfaces/idoctor';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  @Input() doctor: Idoctor;
  constructor() { }

  ngOnInit() {
  }

}
