import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArrayGenresResponse } from 'src/app/common/array-genres-response';
import { ArraySeriesResponse } from '../../models/array-series-response';
import { SeriesService } from '../../services/series.service';

@Component({
  selector: 'app-list-series-by-genre',
  templateUrl: './list-series-by-genre.component.html',
  styleUrls: ['./list-series-by-genre.component.scss']
})
export class ListSeriesByGenreComponent implements OnInit {

  serieGenres$: Observable<ArrayGenresResponse>;
  genresSelected$: Observable<ArraySeriesResponse>;
  genreToDisplay = 0;

  constructor(private seriesService: SeriesService) { }

  ngOnInit(): void {
    this.serieGenres$ = this.seriesService.getSerieGenres();
  }

}
