import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfpayComponent } from './afpay.component';

describe('AfpayComponent', () => {
  let component: AfpayComponent;
  let fixture: ComponentFixture<AfpayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfpayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
