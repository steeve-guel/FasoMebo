import { TestBed } from '@angular/core/testing';

import { MeboService } from './mebo.service';

describe('MeboService', () => {
  let service: MeboService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeboService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
