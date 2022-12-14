import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayeComponent } from './paye.component';

describe('PayeComponent', () => {
  let component: PayeComponent;
  let fixture: ComponentFixture<PayeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
