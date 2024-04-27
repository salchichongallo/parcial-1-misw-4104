import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeComponent } from './coffee.component';
import { CoffeesService } from './coffees.service';

@NgModule({
  imports: [CommonModule],
  declarations: [CoffeeComponent],
  exports: [CoffeeComponent],
  providers: [CoffeesService],
})
export class CoffeeModule {}
