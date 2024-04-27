import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Coffee } from './coffee';
import { environment } from '../../environments/environment';

@Injectable()
export class CoffeesService {
  public readonly coffeesUrl = environment.coffeesUrl;

  constructor(private readonly http: HttpClient) {}

  public getCoffees(): Observable<Coffee[]> {
    return this.http
      .get<Coffee[]>(this.coffeesUrl)
      .pipe(catchError(() => of([])));
  }
}
