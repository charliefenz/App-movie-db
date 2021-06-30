import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { ArrayMoviesResponse } from '../../models/array-movies-response';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-list-movies-by-genre-selector',
  templateUrl: './list-movies-by-genre-selector.component.html',
  styleUrls: ['./list-movies-by-genre-selector.component.scss']
})
export class ListMoviesByGenreSelectorComponent implements OnInit, OnChanges {

  @Input()
  genreToDisplay: number;

  moviesByGenre$: Observable<ArrayMoviesResponse>;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.genreToDisplay.currentValue !== changes.genreToDisplay.previousValue) {
      this.moviesByGenre$ = this.moviesService.getMoviesByGenres(this.genreToDisplay);
    }
  }

}
