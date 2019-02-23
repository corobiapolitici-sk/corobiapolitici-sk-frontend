import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticianListItemComponent } from './politician-list-item.component';

describe('PoliticianListItemComponent', () => {
  let component: PoliticianListItemComponent;
  let fixture: ComponentFixture<PoliticianListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticianListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticianListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
