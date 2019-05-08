import { TestBed } from '@angular/core/testing';

import { GetSubjectsService } from './get-subjects.service';

describe('GetSubjectsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetSubjectsService = TestBed.get(GetSubjectsService);
    expect(service).toBeTruthy();
  });
});
