import { Component, OnInit } from '@angular/core';

import { Coffee, CoffeeType } from '../coffee';
import { CoffeesService } from '../coffees.service';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrl: './coffee-list.component.css',
})
export class CoffeeListComponent implements OnInit {
  protected coffees: Coffee[] = [];

  constructor(private readonly coffeesService: CoffeesService) {}

  ngOnInit() {
    this.getCoffees();
  }

  private getCoffees() {
    this.coffeesService.getCoffees().subscribe(coffees => {
      this.coffees = coffees;
    });
  }

  protected get countBlendCoffee() {
    return this.countBy(CoffeeType.blend);
  }

  private countBy(type: CoffeeType) {
    return this.coffees.filter(coffee => coffee.tipo === type).length;
  }

  protected get countOriginCoffee() {
    return this.countBy(CoffeeType.origin);
  }
}
