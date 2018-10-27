import { TestBed, inject } from '@angular/core/testing';

import { BaseSvgService } from './base-svg.service';

describe('BaseSvgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaseSvgService]
    });
  });

  it('should be created', inject([BaseSvgService], (service: BaseSvgService) => {
    expect(service).toBeTruthy();
  }));
});
