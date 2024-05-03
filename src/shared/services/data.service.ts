import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private http = inject(HttpClient);

  constructor() {}

  fetchData(): Observable<any> {
    return this.http.get('https://62e152f8fa99731d75d44571.mockapi.io/api/v1/test-front-end-skandia/cards');
  }
}

