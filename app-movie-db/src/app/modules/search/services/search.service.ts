import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EndPoints } from 'src/app/common/classes/endpoints';
import { ArraySearchResponse } from '../models/array-search-response';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) { }

  getSearchResults(query: string, page: string): Observable<ArraySearchResponse> {
    return this.httpClient.get<ArraySearchResponse>(`${EndPoints.multiSearch}&query=${query}&page=${page}`);
  }
}
