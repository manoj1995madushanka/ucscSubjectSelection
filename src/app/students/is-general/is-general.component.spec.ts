import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsGeneralComponent } from './is-general.component';

describe('IsGeneralComponent', () => {
  let component: IsGeneralComponent;
  let fixture: ComponentFixture<IsGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
