import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatePage } from './validate.page';

describe('ValidatePage', () => {
  let component: ValidatePage;
  let fixture: ComponentFixture<ValidatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
