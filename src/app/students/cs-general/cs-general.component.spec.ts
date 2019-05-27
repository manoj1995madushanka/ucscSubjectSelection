import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsGeneralComponent } from './cs-general.component';

describe('CsGeneralComponent', () => {
  let component: CsGeneralComponent;
  let fixture: ComponentFixture<CsGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
