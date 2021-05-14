import { Component, OnInit } from '@angular/core';
import { MovieListResult } from '../../movie-list-result';
import { MoviesService } from '../../movies.service';

@Component({
  selector: 'app-list-latest-movies',
  templateUrl: './list-latest-movies.component.html',
  styleUrls: ['./list-latest-movies.component.scss']
})
export class ListLatestMoviesComponent implements OnInit {

  popularMovies: MovieListResult[];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.getPopularMovies();
  }

  getPopularMovies(): void {
    const $popularMovies = this.moviesService.getPopularMovies();
    $popularMovies.subscribe((res) => this.popularMovies = res.results);
  }


}
