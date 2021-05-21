import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { ListPopularMoviesComponent } from './components/list-popular-movies/list-popular-movies.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MaterialModule } from 'src/app/modules/material/material.module';


@NgModule({
  declarations: [
    ListPopularMoviesComponent,
    MovieItemComponent
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
