import { Observable, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Coffee } from './coffee';

@Injectable()
export class CoffeesService {
  public readonly coffeesUrl = environment.coffeesUrl;

  constructor(private readonly http: HttpClient) {}

  public getCoffees(): Observable<Coffee[]> {
    return this.http.get<Coffee[]>(this.coffeesUrl);
  }
}
