import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPopularMoviesComponent } from './components/list-popular-movies/list-popular-movies.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MoviesMainPageComponent } from './components/movies-main-page/movies-main-page.component';

const routes: Routes = [
  {path: '', component: MoviesMainPageComponent},
  {path: ':id', component: MovieDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
