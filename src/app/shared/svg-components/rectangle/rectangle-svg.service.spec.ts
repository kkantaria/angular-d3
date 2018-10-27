import { TestBed, inject } from '@angular/core/testing';

import { RectangleSvgService } from './rectangle-svg.service';

describe('RectangleSvgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RectangleSvgService]
    });
  });

  it('should be created', inject([RectangleSvgService], (service: RectangleSvgService) => {
    expect(service).toBeTruthy();
  }));
});
