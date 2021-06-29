import { Component, Input, OnInit } from '@angular/core';
import { MovieListResult } from '../../models/movie-list-result';
import { GlobalConstants } from 'src/app/common/classes/global-constants';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {

  @Input()
  movie: MovieListResult;
  genreNames: string[];

  constructor() { }

  ngOnInit(): void {
    // Adding the basicUrl for images to the object poster_path property
    this.movie.poster_path = GlobalConstants.imagesPosterUrl + this.movie.poster_path;

    /* // getting genres names
    this.genreNames = this.MoviesAndSeriesService.getGenresById(this.movie.genre_ids); */
  }
}

