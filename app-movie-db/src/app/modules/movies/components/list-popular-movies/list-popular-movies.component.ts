import { Component, OnInit } from '@angular/core';
import { MovieListResult } from '../../models/movie-list-result';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-list-popular-movies',
  templateUrl: './list-popular-movies.component.html',
  styleUrls: ['./list-popular-movies.component.scss']
})
export class ListPopularMoviesComponent implements OnInit {

  // TODO Limit initial load to viewport width
/* Maybe with a formula that detects vw, divides by fixed px of element and indicates the array how many items should show, then with a clickable "view more" should expand the list */

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
