import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPopularMoviesComponent } from './components/list-popular-movies/list-popular-movies.component';

const routes: Routes = [
  {path: '', component: ListPopularMoviesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
