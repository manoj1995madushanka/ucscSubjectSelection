import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hcs4yr1semComponent } from './hcs4yr1sem.component';

describe('Hcs4yr1semComponent', () => {
  let component: Hcs4yr1semComponent;
  let fixture: ComponentFixture<Hcs4yr1semComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hcs4yr1semComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hcs4yr1semComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
