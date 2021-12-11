import { TestBed } from '@angular/core/testing';

import { AppResourceService } from './app.resource.service';

describe('ResourceService', () => {
  let service: AppResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
