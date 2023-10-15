import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Person, Starship } from '../models/swapi-models';

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  private readonly baseUrl = 'https://swapi.dev/api';

  private readonly excludedPersonIds: number[] = [4, 17, 36, 40, 42];
  private readonly excludedStarshipIds: number[] = [
    4, 8, 14, 16, 18, 19, 24, 75,
  ];

  constructor(private http: HttpClient) {}

  getRandomPerson(): Observable<Person> {
    const randomId = this.getRandomId(this.excludedPersonIds);
    return this.http.get<Person>(`${this.baseUrl}/people/${randomId}`).pipe(
      catchError((error) => {
        return throwError('Error getting random person. Please try again.');
      }),
    );
  }

  getRandomStarship(): Observable<Starship> {
    const randomId = this.getRandomId(this.excludedStarshipIds);
    return this.http
      .get<Starship>(`${this.baseUrl}/starships/${randomId}`)
      .pipe(
        catchError((error) => {
          return throwError('Error getting random starship. Please try again.');
        }),
      );
  }

  private getRandomId(excludedIds: number[]): number {
    let randomId: number;
    do {
      randomId = Math.floor(Math.random() * 82) + 1;
    } while (excludedIds.includes(randomId));
    return randomId;
  }
}
