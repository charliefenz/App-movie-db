import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SerieDetailComponent } from './components/serie-detail/serie-detail.component';
import { SeriesMainPageComponent } from './components/series-main-page/series-main-page.component';

const routes: Routes = [
  {path: '', component: SeriesMainPageComponent},
  {path: ':id', component: SerieDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeriesRoutingModule { }
