/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SmallitemComponent } from './smallitem.component';

describe('SmallitemComponent', () => {
  let component: SmallitemComponent;
  let fixture: ComponentFixture<SmallitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
