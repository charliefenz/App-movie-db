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
    try {
      return this.httpClient.get<SearchResponse>(`${EndPoints.multiSearch}&query=${query}&page=${pageNumber}`);
    } catch (error) {
      console.log(`Request error`);
    }

    
  }

  informCompleteReception(): void {
    this._changeDetection.next(++this._detector);
  }

  resetReceptionCounter(): void {
    this._changeDetection.next(this._detector = 0);
  }

  //TODO: Create error handling mechanism for http
  // Check for this resource https://www.tektutorialshub.com/angular/angular-http-error-handling/#:~:text=Whenever%20the%20error%20occurs%20in,using%20the%20Angular%20HTTP%20Interceptor.
  //TODO: Handle to request no-cache on headers
}
