import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListLatestMoviesComponent } from './components/list-latest-movies/list-latest-movies.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';



@NgModule({
  declarations: [
    ListLatestMoviesComponent,
    MovieItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListLatestMoviesComponent,
    MovieItemComponent
  ]
})
export class MoviesModule { }
