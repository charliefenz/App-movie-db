import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { ArrayMovieGenresResponse } from '../../models/array-movie-genres-response';
import { ArrayMoviesResponse } from '../../models/array-movies-response';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-list-movies-by-genre',
  templateUrl: './list-movies-by-genre.component.html',
  styleUrls: ['./list-movies-by-genre.component.scss']
})
export class ListMoviesByGenreComponent implements OnInit {

  movieGenres$: Observable<ArrayMovieGenresResponse>;
  genresSelected$: Observable<ArrayMoviesResponse>;
  genreSelected = 0;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.movieGenres$ = this.moviesService.getMovieGenres();
  }

  change(event): void {
    console.log('changed');
  }
}
