import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalHistoryItemSmallComponent } from './medical-history-item-small.component';

describe('MedicalHistoryItemSmallComponent', () => {
  let component: MedicalHistoryItemSmallComponent;
  let fixture: ComponentFixture<MedicalHistoryItemSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalHistoryItemSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalHistoryItemSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
