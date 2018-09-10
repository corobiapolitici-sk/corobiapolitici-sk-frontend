import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWithIconComponent } from './card-with-icon.component';

describe('CardWithIconComponent', () => {
  let component: CardWithIconComponent;
  let fixture: ComponentFixture<CardWithIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardWithIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardWithIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
