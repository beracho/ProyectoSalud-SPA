import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationBenComponent } from './registration-ben.component';

describe('RegistrationBenComponent', () => {
  let component: RegistrationBenComponent;
  let fixture: ComponentFixture<RegistrationBenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationBenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationBenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
