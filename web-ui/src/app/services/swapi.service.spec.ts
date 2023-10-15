import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { SwapiService } from './swapi.service';

describe('SwapiService', () => {
  let service: SwapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule], // Import HttpClientModule here
    });
    service = TestBed.inject(SwapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
