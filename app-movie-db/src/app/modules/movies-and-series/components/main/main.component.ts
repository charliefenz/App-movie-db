import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArrayMoviesResponse } from 'src/app/modules/movies/models/array-movies-response';
import { MoviesService } from 'src/app/modules/movies/services/movies.service';
import { ArraySeriesResponse } from 'src/app/modules/series/models/array-series-response';
import { SeriesService } from 'src/app/modules/series/services/series.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  trendingMovies$: Observable<ArrayMoviesResponse>;
  trendingSeries$: Observable<ArraySeriesResponse>;

  constructor(private moviesService: MoviesService, private seriesService: SeriesService) { }

  ngOnInit(): void {
    this.trendingMovies$ = this.moviesService.getTrendingMovies();
    this.trendingSeries$ = this.seriesService.getTrendingSeries();
  }

}
