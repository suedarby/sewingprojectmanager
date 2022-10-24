import { TestBed } from '@angular/core/testing';

import { FirebaseStashService } from './firebase-stash.service';

describe('FirebaseStashService', () => {
  let service: FirebaseStashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseStashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
