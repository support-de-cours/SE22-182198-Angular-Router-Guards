import { TestBed } from '@angular/core/testing';

import { YesGuard } from './yes.guard';

describe('YesGuard', () => {
  let guard: YesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(YesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
