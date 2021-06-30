import { Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ArrayGenresResponse } from '../../../../common/models/array-genres-response';
import { ArrayMoviesResponse } from '../../models/array-movies-response';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-list-movies-by-genre',
  templateUrl: './list-movies-by-genre.component.html',
  styleUrls: ['./list-movies-by-genre.component.scss']
})
export class ListMoviesByGenreComponent implements OnInit {

  movieGenres$: Observable<ArrayGenresResponse>;
  genresSelected$: Observable<ArrayMoviesResponse>;
  genreToDisplay = 0;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.movieGenres$ = this.moviesService.getMovieGenres();
  }
}
