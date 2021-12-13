import { TestBed } from '@angular/core/testing';

import { AppResourceService } from './app.resource.service';
import { HttpClient } from '@angular/common/http';
import createSpyObj = jasmine.createSpyObj;

describe('ResourceService', () => {
  let resourceService: AppResourceService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    const spy = createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      providers: [
        AppResourceService,
        { provide: HttpClient, useValue: spy }
      ]
    });

    resourceService = TestBed.inject(AppResourceService);
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  it('should be created', () => {
    expect(resourceService).toBeTruthy();
  });
});
