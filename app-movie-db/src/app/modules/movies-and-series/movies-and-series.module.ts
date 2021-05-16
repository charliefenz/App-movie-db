import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesAndSeriesRoutingModule } from './movies-and-series-routing.module';
import { MoviesModule } from '../movies/movies.module';
import { SeriesModule } from '../series/series.module';
import { MainComponent } from './components/main/main.component';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MoviesAndSeriesRoutingModule,
    MoviesModule,
    SeriesModule
  ]
})
export class MoviesAndSeriesModule { }
