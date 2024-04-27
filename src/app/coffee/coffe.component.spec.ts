import { By } from '@angular/platform-browser';
import { TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { CoffeeComponent } from './coffee.component';

describe('CoffeeComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoffeeComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CoffeeComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'El aroma mágico'`, () => {
    const fixture = TestBed.createComponent(CoffeeComponent);
    const title = fixture.debugElement.query(By.css('h1'))
      .nativeElement as HTMLHeadingElement;
    expect(title.textContent).toEqual('El aroma mágico');
  });
});
