import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EndPoints } from 'src/app/common/endpoints';
import { Observable } from 'rxjs';
import { ArrayMoviesResponse } from '../models/array-movies-response';
import { MovieDetail } from '../models/movie-detail';
import { GlobalConstants } from 'src/app/common/global-constants';
import { ArrayMovieCreditsResponse } from '../models/array-movie-credits-response';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient) { }

  getPopularMovies(): Observable<ArrayMoviesResponse> {
    return this.httpClient.get<ArrayMoviesResponse>(`${EndPoints.popularMovies}`);
  }

  getMovie(id: string): Observable<MovieDetail> {
    return this.httpClient.get<MovieDetail>(`${EndPoints.movie}${id}${GlobalConstants.apiKey}${GlobalConstants.langEs}`);
  }

  getCredits(id: number): Observable<ArrayMovieCreditsResponse> {
    return this.httpClient.get<ArrayMovieCreditsResponse>(`${EndPoints.movie}${id}/credits${GlobalConstants.apiKey}${GlobalConstants.langEs}`);
  }
}
