import { TestBed, inject } from '@angular/core/testing';

import { CompanyService } from './companies.service';

describe('CompaniesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanyService]
    });
  });

  it('should ...', inject([CompanyService], (service: CompanyService) => {
    expect(service).toBeTruthy();
  }));
});
