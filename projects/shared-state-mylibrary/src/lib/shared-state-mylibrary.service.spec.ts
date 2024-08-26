import { TestBed } from '@angular/core/testing';

import { SharedStateMylibraryService } from './shared-state-mylibrary.service';

describe('SharedStateMylibraryService', () => {
  let service: SharedStateMylibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedStateMylibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
