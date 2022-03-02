import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';
import { EndPoints } from 'src/app/common/classes/endpoints';
import { SearchResponseObject } from '../models/search-response-object';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  
  private _detector = 0;
  private _changeDetection = new BehaviorSubject<number>(this._detector);
  
  public changeDetection = this._changeDetection.asObservable();

  constructor(private httpClient: HttpClient) { }

  getSearchResults(query: string, page: string): Observable<ArraySearchResponse> {
    return this.httpClient.get<ArraySearchResponse>(`${EndPoints.multiSearch}&query=${query}&page=${page}`);
  }
}
