import { Component, OnInit } from '@angular/core';
import { AccordionConfig } from 'ngx-bootstrap/accordion';
import { IConsultation } from '../../../shared/interfaces/IConsultation';
import { ConsultationService } from '../../../shared/services/MedicalHistoryService/consultation.service';

export function getAccordionConfig(): AccordionConfig {
  return Object.assign(new AccordionConfig(), { closeOthers: true });
}

@Component({
  selector: 'app-consultation-listing',
  templateUrl: './consultation-listing.component.html',
  styleUrls: ['./consultation-listing.component.css'],
  providers: [{ provide: AccordionConfig, useFactory: getAccordionConfig }]
})
export class ConsultationListingComponent implements OnInit {

  consultations: IConsultation[] = [];

  constructor(private _ConsultationService: ConsultationService) { }

  ngOnInit() {
    this.consultations = this._ConsultationService.consultation;
  }

}
