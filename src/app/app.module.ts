import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoffeeModule } from './coffee/coffee.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoffeeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
