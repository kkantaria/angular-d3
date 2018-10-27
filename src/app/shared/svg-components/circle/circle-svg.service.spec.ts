import { TestBed, inject } from '@angular/core/testing';

import { CircleSvgService } from './circle-svg.service';

describe('CircleSvgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CircleSvgService]
    });
  });

  it('should be created', inject([CircleSvgService], (service: CircleSvgService) => {
    expect(service).toBeTruthy();
  }));
});
