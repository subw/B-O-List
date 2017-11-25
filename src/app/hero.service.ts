import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from './hero';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class HeroService {
    constructor(
        private http: HttpClient) { }

    private heroesUrl = 'api/heroes';  // URL to web api


    getHeroes(): Observable<Hero[]> {
        return this.http.get<Hero[]>(this.heroesUrl)
        .pipe(
            catchError(this.handleError('getHeroes', []))
        );
    }

    /** GET hero by id. Will 404 if id not found */
    getHero(id: number): Observable<Hero> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get<Hero>(url).pipe(
        catchError(this.handleError<Hero>(`getHero id=${id}`))
        );
    }

    /** PUT: update the hero on the server */
    updateHero (hero: Hero): Observable<any> {
        return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
        catchError(this.handleError<any>('updateHero'))
        );
    }

    /** POST: add a new hero to the server */
    addHero (hero: Hero): Observable<Hero> {
        return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
        catchError(this.handleError<Hero>('addHero'))
        );
    }

    /** DELETE: delete the hero from the server */
    deleteHero (hero: Hero | number): Observable<Hero> {
        const id = typeof hero === 'number' ? hero : hero.id;
        const url = `${this.heroesUrl}/${id}`;
    
        return this.http.delete<Hero>(url, httpOptions).pipe(
        catchError(this.handleError<Hero>('deleteHero'))
        );
    }

    /* GET heroes whose name contains search term */
    searchHeroes(term: string): Observable<Hero[]> {
        if (!term.trim()) {
        // if not search term, return empty hero array.
        return of([]);
        }
        return this.http.get<Hero[]>(`api/heroes/?name=${term}`).pipe(
        catchError(this.handleError<Hero[]>('searchHeroes', []))
        );
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
       
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead
              
          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }
}