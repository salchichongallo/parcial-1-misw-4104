import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CoffeeComponent } from './coffee.component';
import { CoffeesService } from './coffees.service';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [CoffeeComponent, CoffeeListComponent],
  exports: [CoffeeComponent],
  providers: [CoffeesService],
})
export class CoffeeModule {}
