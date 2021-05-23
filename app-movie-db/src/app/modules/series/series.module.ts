import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesRoutingModule } from './series-routing.module';
import { ListPopularSeriesComponent } from './components/list-popular-series/list-popular-series.component';
import { SerieItemComponent } from './components/serie-item/serie-item.component';
import { MaterialModule } from 'src/app/modules/material/material.module';



@NgModule({
  declarations: [
    ListPopularSeriesComponent,
    SerieItemComponent
  ],
  imports: [
    CommonModule,
    SeriesRoutingModule,
    MaterialModule
  ],
  exports: [
    ListPopularSeriesComponent
  ]
})
export class SeriesModule { }
