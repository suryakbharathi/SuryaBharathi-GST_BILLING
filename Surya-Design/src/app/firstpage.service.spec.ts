import { TestBed, inject } from '@angular/core/testing';

import { FirstpageService } from './firstpage.service';

describe('FirstpageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirstpageService]
    });
  });

  it('should be created', inject([FirstpageService], (service: FirstpageService) => {
    expect(service).toBeTruthy();
  }));
});
