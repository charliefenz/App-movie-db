import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPopularSeriesComponent } from './components/list-popular-series/list-popular-series.component';
import { SerieDetailComponent } from './components/serie-detail/serie-detail.component';

const routes: Routes = [
  {path: '', component: ListPopularSeriesComponent},
  {path: ':id', component: SerieDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeriesRoutingModule { }
