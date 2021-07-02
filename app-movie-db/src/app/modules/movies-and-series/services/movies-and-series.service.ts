import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountriesApi } from 'src/app/common/classes/countries-api-endpoints';
import { Country } from 'src/app/common/models/countries';

@Injectable({
  providedIn: 'root'
})
export class MoviesAndSeriesService {

  constructor(private httpClient: HttpClient) { }

  getCountryName(countryCode: string): Observable<Country> {
    countryCode = countryCode.toLowerCase();
    return this.httpClient.get<Country>(`${CountriesApi.basicUrl}${countryCode}`);
  }
}
