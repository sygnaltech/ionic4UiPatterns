import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownPage } from './markdown.page';

describe('MarkdownPage', () => {
  let component: MarkdownPage;
  let fixture: ComponentFixture<MarkdownPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkdownPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkdownPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
