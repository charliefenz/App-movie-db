import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { ArraySeriesResponse } from '../../models/array-series-response';
import { SeriesService } from '../../services/series.service';

@Component({
  selector: 'app-list-series-by-genre-selector',
  templateUrl: './list-series-by-genre-selector.component.html',
  styleUrls: ['./list-series-by-genre-selector.component.scss']
})
export class ListSeriesByGenreSelectorComponent implements OnInit, OnChanges {

  @Input()
  genreToDisplay: number;

  seriesByGenre$: Observable<ArraySeriesResponse>;

  constructor(private seriesService: SeriesService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.genreToDisplay.currentValue !== changes.genreToDisplay.previousValue) {
      this.seriesByGenre$ = this.seriesService.getSeriesByGenres(this.genreToDisplay);
    }
  }

}
