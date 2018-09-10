import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTurquoiseComponent } from './section-turquoise.component';

describe('SectionTurquoiseComponent', () => {
  let component: SectionTurquoiseComponent;
  let fixture: ComponentFixture<SectionTurquoiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionTurquoiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTurquoiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
