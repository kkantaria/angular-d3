import { TestBed, inject } from '@angular/core/testing';

import { TriangleSvgService } from './triangle-svg.service';

describe('TriangleSvgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TriangleSvgService]
    });
  });

  it('should be created', inject([TriangleSvgService], (service: TriangleSvgService) => {
    expect(service).toBeTruthy();
  }));
});
