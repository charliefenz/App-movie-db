import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArrayGenresResponse } from 'src/app/common/models/array-genres-response';
import { EndPoints } from 'src/app/common/classes/endpoints';
import { GlobalConstants } from 'src/app/common/classes/global-constants';
import { ArraySeriesCreditsResponse } from '../models/array-series-credits-response';
import { ArraySeriesResponse } from '../models/array-series-response';
import { SeasonDetail } from '../models/season-detail';
import { SerieDetail } from '../models/serie-detail';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor(private httpClient: HttpClient) { }

  getPopularSeries(): Observable<ArraySeriesResponse> {
    return this.httpClient.get<ArraySeriesResponse>(`${EndPoints.popularSeries}`);
  }

  getSerie(id: string): Observable<SerieDetail> {
    return this.httpClient.get<SerieDetail>(`${EndPoints.serie}${id}${GlobalConstants.apiKey}${GlobalConstants.langEs}`);
  }

  getCredits(id: number): Observable<ArraySeriesCreditsResponse> {
    return this.httpClient.get<ArraySeriesCreditsResponse>(`${EndPoints.serie}${id}/credits${GlobalConstants.apiKey}${GlobalConstants.langEs}`);
  }

  getSeason(tvId: number, seasonNumber: number): Observable<SeasonDetail> {
    return this.httpClient.get<SeasonDetail>(`${EndPoints.serie}${tvId}/season/${seasonNumber}${GlobalConstants.apiKey}${GlobalConstants.langEs}`);
  }

  getTopRatedSeries(): Observable<ArraySeriesResponse> {
    return this.httpClient.get<ArraySeriesResponse>(EndPoints.topRatedSeries);
  }

  getSerieGenres(): Observable<ArrayGenresResponse> {
    return this.httpClient.get<ArrayGenresResponse>(`${EndPoints.serieGenres}`);
  }

  getSeriesByGenres(genreId: number): Observable<ArraySeriesResponse> {
    return this.httpClient.get<ArraySeriesResponse>(`${EndPoints.serieDiscover}${GlobalConstants.apiKey}${GlobalConstants.langEs}&${GlobalConstants.sortDescQuery}&${GlobalConstants.genreQuery}${genreId}`);
  }

  getSearchSeries(page: number, query: string): Observable<ArraySeriesResponse> {
    const codedSearch = encodeURI(query);
    return this.httpClient.get<ArraySeriesResponse>(`${EndPoints.searchSerie}&page=${page}&query=${codedSearch}`);
  }
}
