import { Component, OnInit } from '@angular/core';
import { SerieListResult } from '../../models/serie-list-result';
import { SeriesService } from '../../services/series.service';

@Component({
  selector: 'app-list-popular-series',
  templateUrl: './list-popular-series.component.html',
  styleUrls: ['./list-popular-series.component.scss']
})
export class ListPopularSeriesComponent implements OnInit {

  popularSeries: SerieListResult[];

  constructor(private seriesService: SeriesService) { }

  ngOnInit(): void {
    this.seriesService.getPopularSeries();
  }

  getPopularSeries(): void {
    const $popularSeries = this.seriesService.getPopularSeries();
    $popularSeries.subscribe((res) => this.popularSeries = res.results);
  }

}
