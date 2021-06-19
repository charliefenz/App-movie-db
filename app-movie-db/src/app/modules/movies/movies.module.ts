import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { ListPopularMoviesComponent } from './components/list-popular-movies/list-popular-movies.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { ListTopRatedMoviesComponent } from './components/list-top-rated-movies/list-top-rated-movies.component';
import { MoviesMainPageComponent } from './components/movies-main-page/movies-main-page.component';
import { ListMoviesByGenreComponent } from './components/list-movies-by-genre/list-movies-by-genre.component';
import { ListMoviesByGenreSelectorComponent } from './components/list-movies-by-genre-selector/list-movies-by-genre-selector.component';


@NgModule({
  declarations: [
    ListPopularMoviesComponent,
    MovieItemComponent,
    MovieDetailComponent,
    ListTopRatedMoviesComponent,
    MoviesMainPageComponent,
    ListMoviesByGenreComponent,
    ListMoviesByGenreSelectorComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MaterialModule
  ],
  exports: [
    ListPopularMoviesComponent,
    MovieItemComponent
  ]
})
export class MoviesModule { }
