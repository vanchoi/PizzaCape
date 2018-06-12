import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenagmentOrdersComponent } from './menagment-orders.component';

describe('MenagmentOrdersComponent', () => {
  let component: MenagmentOrdersComponent;
  let fixture: ComponentFixture<MenagmentOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenagmentOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenagmentOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
