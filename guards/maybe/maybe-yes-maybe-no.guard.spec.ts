import { TestBed } from '@angular/core/testing';

import { MaybeYesMaybeNoGuard } from './maybe-yes-maybe-no.guard';

describe('MaybeYesMaybeNoGuard', () => {
  let guard: MaybeYesMaybeNoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MaybeYesMaybeNoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
