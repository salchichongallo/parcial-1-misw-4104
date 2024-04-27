import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CoffeesService } from './coffees.service';
import { Coffee } from './coffee';

describe('CoffeesService', () => {
  let service: CoffeesService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoffeesService],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CoffeesService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('service should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should not get coffees', () => {
    const EMPTY_COFFEES: Coffee[] = [];
    service.getCoffees().subscribe(coffees => expect(coffees).toEqual([]));

    const testRequest = httpController.expectOne(service.coffeesUrl);
    testRequest.flush(EMPTY_COFFEES);

    httpController.verify();
    expect(testRequest.request.method).toEqual('GET');
  });
});
