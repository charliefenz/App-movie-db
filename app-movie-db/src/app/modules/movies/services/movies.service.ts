import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EndPoints } from 'src/app/common/classes/endpoints';
import { Observable } from 'rxjs';
import { ArrayMoviesResponse } from '../models/array-movies-response';
import { MovieDetail } from '../models/movie-detail';
import { GlobalConstants } from 'src/app/common/classes/global-constants';
import { ArrayMovieCreditsResponse } from '../models/array-movie-credits-response';
import { ArrayGenresResponse } from '../../../common/models/array-genres-response';

@Injectable()
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

  getTopRatedMovies(): Observable<ArrayMoviesResponse> {
    return this.httpClient.get<ArrayMoviesResponse>(EndPoints.topRatedMovies);
  }

  getMovieGenres(): Observable<ArrayGenresResponse> {
    return this.httpClient.get<ArrayGenresResponse>(`${EndPoints.movieGenres}`);
  }

  getMoviesByGenres(genreId: number): Observable<ArrayMoviesResponse> {
    return this.httpClient.get<ArrayMoviesResponse>(`${EndPoints.movieDiscover}${GlobalConstants.apiKey}${GlobalConstants.langEs}&${GlobalConstants.sortDescQuery}&${GlobalConstants.genreQuery}${genreId}`);
  }

  getSearchMovies(page: number, query: string): Observable<ArrayMoviesResponse> {
    const codedSearch = encodeURI(query);
    return this.httpClient.get<ArrayMoviesResponse>(`${EndPoints.searchMovie}&page=${page}&query=${codedSearch}`);
  }

  getTrendingMovies(): Observable<ArrayMoviesResponse> {
    return this.httpClient.get<ArrayMoviesResponse>(EndPoints.trendingMovie);
  }
}
