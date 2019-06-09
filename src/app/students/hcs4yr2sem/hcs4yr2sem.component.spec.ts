import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hcs4yr2semComponent } from './hcs4yr2sem.component';

describe('Hcs4yr2semComponent', () => {
  let component: Hcs4yr2semComponent;
  let fixture: ComponentFixture<Hcs4yr2semComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hcs4yr2semComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hcs4yr2semComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
