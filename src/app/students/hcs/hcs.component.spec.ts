import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HcsComponent } from './hcs.component';

describe('HcsComponent', () => {
  let component: HcsComponent;
  let fixture: ComponentFixture<HcsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
