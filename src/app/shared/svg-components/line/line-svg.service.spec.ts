import { TestBed, inject } from '@angular/core/testing';

import { LineSvgService } from './line-svg.service';

describe('LineSvgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LineSvgService]
    });
  });

  it('should be created', inject([LineSvgService], (service: LineSvgService) => {
    expect(service).toBeTruthy();
  }));
});
