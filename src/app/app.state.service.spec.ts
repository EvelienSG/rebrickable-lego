import { TestBed } from '@angular/core/testing';

import { AppStateService } from './app.state.service';

describe('StateService', () => {
  let service: AppStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // describe('removeFavorite', () => {
  //   it('should remove a favorite from the favorites array', () => {
  //
  //   });
  // })
});
