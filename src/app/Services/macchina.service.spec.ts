import { TestBed, inject } from '@angular/core/testing';

import { macchinasService } from './macchinas.service';

describe('macchinasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [macchinasService]
    });
  });

  it('should ...', inject([macchinasService], (service: macchinasService) => {
    expect(service).toBeTruthy();
  }));
});
