import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HisSelectYearSemComponent } from './his-select-year-sem.component';

describe('HisSelectYearSemComponent', () => {
  let component: HisSelectYearSemComponent;
  let fixture: ComponentFixture<HisSelectYearSemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HisSelectYearSemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HisSelectYearSemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
