/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DevKidsComponent } from './dev-kids.component';

describe('DevKidsComponent', () => {
  let component: DevKidsComponent;
  let fixture: ComponentFixture<DevKidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevKidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevKidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
