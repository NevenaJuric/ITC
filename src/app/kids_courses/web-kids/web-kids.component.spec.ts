/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WebKidsComponent } from './web-kids.component';

describe('WebKidsComponent', () => {
  let component: WebKidsComponent;
  let fixture: ComponentFixture<WebKidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebKidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebKidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
