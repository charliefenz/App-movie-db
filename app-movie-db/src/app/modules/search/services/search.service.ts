import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';
import { EndPoints } from 'src/app/common/classes/endpoints';
import { SearchResponse } from '../models/search-response';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  
  private _detector = 0;
  private _changeDetection = new BehaviorSubject<number>(this._detector);
  
  public changeDetection = this._changeDetection.asObservable();

  constructor(private httpClient: HttpClient) { }

  getSearchResults(query: string, pageNumber: string): Observable<SearchResponse> {
    return this.httpClient.get<SearchResponse>(`${EndPoints.multiSearch}&query=${query}&page=${pageNumber}`);
  }

  informCompleteReception(): void {
    this._changeDetection.next(++this._detector);
  }

  resetReceptionCounter(): void {
    this._changeDetection.next(this._detector = 0);
  }

  //TODO: Create error handling mechanism for http
  //TODO: Handle to request no-cache on headers
}
