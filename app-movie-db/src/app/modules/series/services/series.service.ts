import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EndPoints } from 'src/app/common/endpoints';
import { ArraySeriesResponse } from '../models/array-series-response';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor(private httpClient: HttpClient) { }

  getPopularSeries(): Observable<ArraySeriesResponse> {
    return this.httpClient.get<ArraySeriesResponse>(`${EndPoints.popularSeries}`);
  }
}
