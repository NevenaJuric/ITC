/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RoboticsComponent } from './robotics.component';

describe('RoboticsComponent', () => {
  let component: RoboticsComponent;
  let fixture: ComponentFixture<RoboticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoboticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoboticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
