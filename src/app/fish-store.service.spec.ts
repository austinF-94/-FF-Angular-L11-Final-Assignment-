import { TestBed } from '@angular/core/testing';

import { FishStoreService } from './fish-store.service';

describe('FishStoreService', () => {
  let service: FishStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FishStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
