import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeacrhMComponent } from './seacrh-m.component';

describe('SeacrhMComponent', () => {
  let component: SeacrhMComponent;
  let fixture: ComponentFixture<SeacrhMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeacrhMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeacrhMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
