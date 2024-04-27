import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeListComponent } from './coffee-list.component';

describe('CoffeeListComponent', () => {
  let fixture: ComponentFixture<CoffeeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoffeeListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeListComponent);
    fixture.detectChanges();
  });

  it('should render header table', () => {
    const [numeral, title, type, region] = fixture.debugElement.queryAll(
      By.css('th'),
    );
    expect(numeral.nativeElement.textContent).toBe('#');
    expect(title.nativeElement.textContent).toBe('Nombre');
    expect(type.nativeElement.textContent).toBe('Tipo');
    expect(region.nativeElement.textContent).toBe('Región');
  });
});
