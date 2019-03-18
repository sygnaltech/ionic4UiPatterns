import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Enums1Page } from './enums1.page';

describe('Enums1Page', () => {
  let component: Enums1Page;
  let fixture: ComponentFixture<Enums1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Enums1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Enums1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
