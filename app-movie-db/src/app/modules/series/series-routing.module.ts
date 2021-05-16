import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPopularSeriesComponent } from './components/list-popular-series/list-popular-series.component';

const routes: Routes = [
  {path: '', component: ListPopularSeriesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeriesRoutingModule { }
