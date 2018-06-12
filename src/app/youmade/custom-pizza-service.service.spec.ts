import { TestBed, inject } from '@angular/core/testing';

import { CustomPizzaServiceService } from './custom-pizza-service.service';

describe('CustomPizzaServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomPizzaServiceService]
    });
  });

  it('should be created', inject([CustomPizzaServiceService], (service: CustomPizzaServiceService) => {
    expect(service).toBeTruthy();
  }));
});
