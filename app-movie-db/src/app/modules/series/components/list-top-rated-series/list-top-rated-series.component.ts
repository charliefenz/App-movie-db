import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArraySeriesResponse } from '../../models/array-series-response';
import { SeriesService } from '../../services/series.service';

@Component({
  selector: 'app-list-top-rated-series',
  templateUrl: './list-top-rated-series.component.html',
  styleUrls: ['./list-top-rated-series.component.scss']
})
export class ListTopRatedSeriesComponent implements OnInit {

  topRatedSeries$: Observable<ArraySeriesResponse>;

  constructor(private seriesService: SeriesService) { }

  ngOnInit(): void {
    this.topRatedSeries$ = this.seriesService.getTopRatedSeries();
  }

}
