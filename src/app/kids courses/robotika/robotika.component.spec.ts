/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RobotikaComponent } from './robotika.component';

describe('RobotikaComponent', () => {
  let component: RobotikaComponent;
  let fixture: ComponentFixture<RobotikaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobotikaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
