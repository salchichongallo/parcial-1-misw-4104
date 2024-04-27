import { TestBed } from '@angular/core/testing';
import { CoffeesService } from './coffees.service';

describe('CoffeesService', () => {
  let service: CoffeesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoffeesService],
    });
    service = TestBed.inject(CoffeesService);
  });

  it('service should be defined', () => {
    expect(service).toBeDefined();
  });
});
