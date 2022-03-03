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

  getSearchResults(query: string, pageNumber: string): Observable<SearchResponseObject> {
    return this.httpClient.get<SearchResponseObject>(`${EndPoints.multiSearch}&query=${query}&page=${pageNumber}`);
  }

  informCompleteReception(): void {
    console.log('service informed of completed petition');
    this._changeDetection.next(++this._detector);
  }

  //TODO: Create error handling mechanism for http
}
