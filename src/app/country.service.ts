import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  baseUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  getCountries(page: number): Observable<any> {
    return this.http.get(this.baseUrl + '/country/get/' + page);
  }
}
