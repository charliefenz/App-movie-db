import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPopularSeriesComponent } from './components/list-popular-series/list-popular-series.component';



@NgModule({
  declarations: [
    ListPopularSeriesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListPopularSeriesComponent
  ]
})
export class SeriesModule { }
