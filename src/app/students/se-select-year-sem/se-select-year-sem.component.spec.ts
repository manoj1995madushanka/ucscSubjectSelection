import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeSelectYearSemComponent } from './se-select-year-sem.component';

describe('SeSelectYearSemComponent', () => {
  let component: SeSelectYearSemComponent;
  let fixture: ComponentFixture<SeSelectYearSemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeSelectYearSemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeSelectYearSemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
