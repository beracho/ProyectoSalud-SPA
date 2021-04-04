import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationAfiComponent } from './registration-afi.component';

describe('RegistrationAfiComponent', () => {
  let component: RegistrationAfiComponent;
  let fixture: ComponentFixture<RegistrationAfiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationAfiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationAfiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
