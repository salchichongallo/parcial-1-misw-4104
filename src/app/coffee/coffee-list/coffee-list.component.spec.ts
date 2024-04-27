import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { buildCoffee } from '../coffee.fixtures';
import { CoffeesService } from '../coffees.service';

import { CoffeeListComponent } from './coffee-list.component';

describe('CoffeeListComponent', () => {
  let fixture: ComponentFixture<CoffeeListComponent>;
  let coffeesService: jasmine.SpyObj<CoffeesService>;

  beforeEach(async () => {
    coffeesService = jasmine.createSpyObj('CoffeesService', ['getCoffees']);
    coffeesService.getCoffees.and.returnValue(of([]));

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
});
