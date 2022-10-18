import { TestBed } from '@angular/core/testing';

import { MaybeService } from './maybe.service';

describe('MaybeService', () => {
  let service: MaybeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaybeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
