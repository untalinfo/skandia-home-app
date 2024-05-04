import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { cardDataInterface } from '../interfaces/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  fetchData(): Observable<cardDataInterface> {
    return this.http.get<cardDataInterface>('https://62e152f8fa99731d75d44571.mockapi.io/api/v1/test-front-end-skandia/cards');
  }
}

