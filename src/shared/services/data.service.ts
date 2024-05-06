import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { cardDataInterface } from '../interfaces/data';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  fetchData(): Observable<cardDataInterface> {
    return this.http.get<cardDataInterface>(`${environment.apiUrlBase}test-front-end-skandia/cards`).pipe(catchError((error: HttpErrorResponse) => {
      let errorMessage ="";

      if(error.error instanceof ErrorEvent) {
        errorMessage = `Error:  ${error.error.message}`;
      } else {
        errorMessage = `Error code: ${error.status}, message:  ${error.message}`;
      }

      return throwError(() => errorMessage);
    }));
  }
}

