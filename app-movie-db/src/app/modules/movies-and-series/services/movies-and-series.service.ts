import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EndPoints } from 'src/app/common/endpoints';
import { GenresResponse } from '../models/genres-response';

@Injectable({
  providedIn: 'root'
})
export class MoviesAndSeriesService {

  constructor(private httpClient: HttpClient) { }

  getGenresById(ids: number[]): string[] {
    const genres$ = this.getGenres();
    const result: string[] = [];
    ids.forEach((idElement) => {
      genres$.subscribe((res) => {
        const found = res.genres.find((element) => element.id === idElement);
        result.push(found.name);
      });
    });
    return result;
  }

  private getGenres(): Observable<GenresResponse> {
    return this.httpClient.get<GenresResponse>(EndPoints.genres);
  }



}
