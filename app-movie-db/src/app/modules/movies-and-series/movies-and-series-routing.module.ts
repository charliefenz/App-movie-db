import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    // FIXME
    // Fix the way home loads components from movies and series
    /* children: [
      {path: '', loadChildren: () => import('../movies/movies.module').then((m) => m.MoviesModule)},
      {path: '', loadChildren: () => import('../series/series.module').then((m) => m.SeriesModule)}
    ] */
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesAndSeriesRoutingModule { }
