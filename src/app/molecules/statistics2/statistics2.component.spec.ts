import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Statistics2Component } from './statistics2.component';

describe('StatisticsComponent', () => {
  let component: Statistics2Component;
  let fixture: ComponentFixture<Statistics2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Statistics2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Statistics2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
