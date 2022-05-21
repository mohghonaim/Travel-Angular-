import { TestBed } from '@angular/core/testing';

import { DahabService } from './dahab.service';

describe('DahabService', () => {
  let service: DahabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DahabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
