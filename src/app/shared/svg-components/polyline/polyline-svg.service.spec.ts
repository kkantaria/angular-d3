import { TestBed, inject } from '@angular/core/testing';

import { PolylineSvgService } from './polyline-svg.service';

describe('PolylineSvgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PolylineSvgService]
    });
  });

  it('should be created', inject([PolylineSvgService], (service: PolylineSvgService) => {
    expect(service).toBeTruthy();
  }));
});
