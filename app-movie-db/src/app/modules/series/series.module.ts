import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesRoutingModule } from './series-routing.module';
import { ListPopularSeriesComponent } from './components/list-popular-series/list-popular-series.component';



@NgModule({
  declarations: [
    ListPopularSeriesComponent
  ],
  imports: [
    CommonModule,
    SeriesRoutingModule
  ],
  exports: [
    ListPopularSeriesComponent
  ]
})
export class SeriesModule { }
