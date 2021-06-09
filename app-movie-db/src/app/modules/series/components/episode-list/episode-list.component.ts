import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { SeasonDetail } from '../../models/season-detail';
import { SeriesService } from '../../services/series.service';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.scss']
})
export class EpisodeListComponent implements OnInit, OnChanges {

  @Input()
  serieId: number;
  @Input()
  seasonNumber: number;
  @Input()
  serieName: string;
  season$: Observable<SeasonDetail>;

  constructor(private seriesService: SeriesService) { }

  ngOnInit(): void {
    this.season$ = this.seriesService.getSeason(this.serieId, this.seasonNumber);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.seasonNumber.currentValue && changes.seasonNumber.previousValue) {
      this.season$ = this.seriesService.getSeason(this.serieId, this.seasonNumber);
    }
  }

}
