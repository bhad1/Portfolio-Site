/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HireMeComponent } from './hire-me.component';

describe('HireMeComponent', () => {
  let component: HireMeComponent;
  let fixture: ComponentFixture<HireMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HireMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HireMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
