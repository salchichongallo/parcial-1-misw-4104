import { of } from 'rxjs';
import { faker } from '@faker-js/faker';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeType } from '../coffee';
import { buildCoffee } from '../coffee.fixtures';
import { CoffeesService } from '../coffees.service';

import { CoffeeListComponent } from './coffee-list.component';

describe('CoffeeListComponent', () => {
  let fixture: ComponentFixture<CoffeeListComponent>;
  let coffeesService: jasmine.SpyObj<CoffeesService>;

  beforeEach(async () => {
    coffeesService = jasmine.createSpyObj('CoffeesService', ['getCoffees']);

    await TestBed.configureTestingModule({
      declarations: [CoffeeListComponent],
      providers: [
        {
          provide: CoffeesService,
          useValue: coffeesService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CoffeeListComponent);
  });

  it('should render header table', () => {
    coffeesService.getCoffees.and.returnValue(of([]));
    fixture.detectChanges();
    const [numeral, title, type, region] = fixture.debugElement.queryAll(
      By.css('th'),
    );
    expect(numeral.nativeElement.textContent).toBe('#');
    expect(title.nativeElement.textContent).toBe('Nombre');
    expect(type.nativeElement.textContent).toBe('Tipo');
    expect(region.nativeElement.textContent).toBe('Región');
  });

  it('should render the given coffee', () => {
    const coffee = buildCoffee();
    coffeesService.getCoffees.and.returnValue(of([coffee]));
    fixture.detectChanges();

    const [numeral, name, type, region] = fixture.debugElement.queryAll(
      By.css('td'),
    );
    expect(numeral.nativeElement.textContent).toBe('1');
    expect(name.nativeElement.textContent).toBe(coffee.nombre);
    expect(type.nativeElement.textContent).toBe(coffee.tipo);
    expect(region.nativeElement.textContent).toBe(coffee.region);
  });

  it('should render a list of coffee', () => {
    const coffees = [buildCoffee(), buildCoffee(), buildCoffee()];
    coffeesService.getCoffees.and.returnValue(of(coffees));
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    rows.forEach((row, index) => {
      const coffee = coffees[index];
      const [numeral, name, type, region] = row.queryAll(By.css('td'));
      expect(numeral?.nativeElement.textContent).toBe((index + 1).toString());
      expect(name?.nativeElement.textContent).toBe(coffee.nombre);
      expect(type?.nativeElement.textContent).toBe(coffee.tipo);
      expect(region?.nativeElement.textContent).toBe(coffee.region);
    });
  });

  it(`should count the amount of 'Blend' coffee in the list`, () => {
    const totalCoffees = faker.number.int({ min: 0, max: 20 });
    const coffees = new Array(totalCoffees)
      .fill(null)
      .map(() => buildCoffee({ type: CoffeeType.blend }));

    coffeesService.getCoffees.and.returnValue(of(coffees));

    fixture.detectChanges();
    const element = fixture.debugElement.query(By.css('#blend-coffee'));

    expect(element.nativeElement.textContent).toBe(totalCoffees.toString());
  });

  it(`should count the amount of 'Café de Origen' coffee in the list`, () => {
    const totalCoffees = faker.number.int({ min: 0, max: 20 });
    const coffees = new Array(totalCoffees)
      .fill(null)
      .map(() => buildCoffee({ type: CoffeeType.origin }));

    coffeesService.getCoffees.and.returnValue(of(coffees));

    fixture.detectChanges();
    const element = fixture.debugElement.query(By.css('#origin-coffee'));

    expect(element.nativeElement.textContent).toBe(totalCoffees.toString());
  });
});
