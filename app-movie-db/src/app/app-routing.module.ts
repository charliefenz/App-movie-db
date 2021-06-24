import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultComponent } from './components/search-result/search-result.component';

const routes: Routes = [
  {path: '', loadChildren: () => import('./modules/movies-and-series/movies-and-series.module').then((m) => m.MoviesAndSeriesModule)},
  {path: 'movies', loadChildren: () => import('./modules/movies/movies.module').then((m) => m.MoviesModule)},
  {path: 'series', loadChildren: () => import('./modules/series/series.module').then((m) => m.SeriesModule)},
  {path: 'search', component: SearchResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
