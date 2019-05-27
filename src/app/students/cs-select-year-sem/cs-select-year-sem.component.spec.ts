import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsSelectYearSemComponent } from './cs-select-year-sem.component';

describe('CsSelectYearSemComponent', () => {
  let component: CsSelectYearSemComponent;
  let fixture: ComponentFixture<CsSelectYearSemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsSelectYearSemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsSelectYearSemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
