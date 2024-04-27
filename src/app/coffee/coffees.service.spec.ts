import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { Coffee } from './coffee';
import { buildCoffee } from './coffee.fixtures';
import { CoffeesService } from './coffees.service';

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

  it('should not get coffees', () => {
    const EMPTY_COFFEES: Coffee[] = [];
    service.getCoffees().subscribe(coffees => expect(coffees).toEqual([]));

    const testRequest = httpController.expectOne(service.coffeesUrl);
    testRequest.flush(EMPTY_COFFEES);

    httpController.verify();
    expect(testRequest.request.method).toEqual('GET');
  });

  it('should get one coffee', () => {
    const coffeeData = buildCoffee();

    service.getCoffees().subscribe(coffees => {
      expect(coffees).toHaveSize(1);

      const coffee = coffees[0];
      expect(coffee.id).toBe(coffeeData.id);
      expect(coffee.nombre).toBe(coffeeData.nombre);
      expect(coffee.tipo).toBe(coffeeData.tipo);
      expect(coffee.region).toBe(coffeeData.region);
      expect(coffee.sabor).toBe(coffeeData.sabor);
      expect(coffee.altura).toBe(coffeeData.altura);
      expect(coffee.imagen).toBe(coffeeData.imagen);
    });

    const testRequest = httpController.expectOne(service.coffeesUrl);
    testRequest.flush([coffeeData]);

    httpController.verify();
  });

  it('should return a list of coffees', () => {
    const coffee1 = buildCoffee();
    const coffee2 = buildCoffee();
    const coffee3 = buildCoffee();

    service.getCoffees().subscribe(coffees => {
      expect(coffees).toHaveSize(3);
      expect(coffee1.id).toBe(coffees[0].id);
      expect(coffee2.id).toBe(coffees[1].id);
      expect(coffee3.id).toBe(coffees[2].id);
    });

    const testRequest = httpController.expectOne(service.coffeesUrl);
    testRequest.flush([coffee1, coffee2, coffee3]);

    httpController.verify();
  });

  it('should return an empty list if fails fetching coffees', done => {
    service.getCoffees().subscribe({
      next: coffees => {
        expect(coffees).toEqual([]);
        done();
      },
      error: () => fail('should have return an empty list of coffees'),
    });

    const testRequest = httpController.expectOne(service.coffeesUrl);

    testRequest.error(new ProgressEvent('error'));
  });
});
