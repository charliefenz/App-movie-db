import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultComponent } from './components/search-result/search-result.component';

const routes: Routes = [
  {path: '', component: SearchResultComponent},
  {path: 'movies', loadChildren: () => import('../../modules/movies/movies.module').then((m) => m.MoviesModule)},
  {path: 'series', loadChildren: () => import('../../modules/series/series.module').then((m) => m.SeriesModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
