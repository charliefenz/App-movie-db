import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesRoutingModule } from './series-routing.module';
import { ListPopularSeriesComponent } from './components/list-popular-series/list-popular-series.component';
import { SerieItemComponent } from './components/serie-item/serie-item.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { SerieDetailComponent } from './components/serie-detail/serie-detail.component';
import { EpisodeListComponent } from './components/episode-list/episode-list.component';
import { EpisodeItemComponent } from './components/episode-item/episode-item.component';
import { ListSeriesByGenreComponent } from './components/list-series-by-genre/list-series-by-genre.component';
import { SeriesMainPageComponent } from './components/series-main-page/series-main-page.component';
import { ListTopRatedSeriesComponent } from './components/list-top-rated-series/list-top-rated-series.component';
import { ListSeriesByGenreSelectorComponent } from './components/list-series-by-genre-selector/list-series-by-genre-selector.component';
import { SeriesService } from './services/series.service';



@NgModule({
  declarations: [
    ListPopularSeriesComponent,
    SerieItemComponent,
    SerieDetailComponent,
    EpisodeListComponent,
    EpisodeItemComponent,
    ListSeriesByGenreComponent,
    SeriesMainPageComponent,
    ListTopRatedSeriesComponent,
    ListSeriesByGenreSelectorComponent
  ],
  imports: [
    CommonModule,
    SeriesRoutingModule,
    MaterialModule
  ],
  providers: [
    SeriesService
  ],
  exports: [
    ListPopularSeriesComponent
  ]
})
export class SeriesModule { }
