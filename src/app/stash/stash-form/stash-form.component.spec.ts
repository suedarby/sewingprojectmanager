/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StashFormComponent } from './stash-form.component';

describe('StashFormComponent', () => {
  let component: StashFormComponent;
  let fixture: ComponentFixture<StashFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StashFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StashFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
