import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalHistoryListingComponent } from './medical-history-listing.component';

describe('MedicalHistoryListingComponent', () => {
  let component: MedicalHistoryListingComponent;
  let fixture: ComponentFixture<MedicalHistoryListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalHistoryListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalHistoryListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
