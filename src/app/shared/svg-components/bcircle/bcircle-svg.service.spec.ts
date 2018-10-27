import { TestBed, inject } from '@angular/core/testing';

import { BcircleSvgService } from './bcircle-svg.service';

describe('BcircleSvgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BcircleSvgService]
    });
  });

  it('should be created', inject([BcircleSvgService], (service: BcircleSvgService) => {
    expect(service).toBeTruthy();
  }));
});
