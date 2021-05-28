import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPopularMoviesComponent } from './components/list-popular-movies/list-popular-movies.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';

const routes: Routes = [
  {path: '', component: ListPopularMoviesComponent},
  {path: ':id', component: MovieDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
