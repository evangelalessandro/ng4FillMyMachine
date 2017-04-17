import { TestBed, inject } from '@angular/core/testing';

import { TrucksService } from './trucks.service';

describe('TrucksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrucksService]
    });
  });

  it('should ...', inject([TrucksService], (service: TrucksService) => {
    expect(service).toBeTruthy();
  }));
});
