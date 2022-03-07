import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesAndSeriesRoutingModule } from './movies-and-series-routing.module';
import { MainComponent } from './components/main/main.component';
import { MainItemComponent } from './components/main-item/main-item.component';
import { MaterialModule } from '../material/material.module';
import { SeriesService } from '../series/services/series.service';
import { MoviesService } from '../movies/services/movies.service';



@NgModule({
  declarations: [
    MainComponent,
    MainItemComponent
  ],
  imports: [
    CommonModule,
    MoviesAndSeriesRoutingModule,
    MaterialModule
  ],
  providers: [SeriesService, MoviesService]
})
export class MoviesAndSeriesModule { }
