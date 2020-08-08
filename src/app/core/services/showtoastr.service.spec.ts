import { TestBed } from '@angular/core/testing';

import { ShowtoastrService } from './showtoastr.service';

describe('ShowtoastrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowtoastrService = TestBed.get(ShowtoastrService);
    expect(service).toBeTruthy();
  });
});
