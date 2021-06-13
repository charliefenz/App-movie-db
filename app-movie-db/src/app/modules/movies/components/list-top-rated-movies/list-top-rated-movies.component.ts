import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArrayMoviesResponse } from '../../models/array-movies-response';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-list-top-rated-movies',
  templateUrl: './list-top-rated-movies.component.html',
  styleUrls: ['./list-top-rated-movies.component.scss']
})
export class ListTopRatedMoviesComponent implements OnInit {

  constructor(private moviesService: MoviesService) { }

  topRatedMovies$: Observable<ArrayMoviesResponse>;

  ngOnInit(): void {
    this.topRatedMovies$ = this.moviesService.getTopRatedMovies();
  }

}
