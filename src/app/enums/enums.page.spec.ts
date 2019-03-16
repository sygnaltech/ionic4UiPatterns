import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnumsPage } from './enums.page';

describe('EnumsPage', () => {
  let component: EnumsPage;
  let fixture: ComponentFixture<EnumsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnumsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnumsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
