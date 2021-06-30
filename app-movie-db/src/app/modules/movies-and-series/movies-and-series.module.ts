import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesAndSeriesRoutingModule } from './movies-and-series-routing.module';
import { MainComponent } from './components/main/main.component';
import { MainItemComponent } from './components/main-item/main-item.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    MainComponent,
    MainItemComponent
  ],
  imports: [
    CommonModule,
    MoviesAndSeriesRoutingModule,
    MaterialModule
  ]
})
export class MoviesAndSeriesModule { }
