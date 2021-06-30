import { Component, Input, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/app/common/classes/global-constants';
import { SerieListResult } from '../../models/serie-list-result';
import { SeriesService } from '../../services/series.service';

@Component({
  selector: 'app-serie-item',
  templateUrl: './serie-item.component.html',
  styleUrls: ['./serie-item.component.scss']
})
export class SerieItemComponent implements OnInit {

  @Input()
  serie: SerieListResult;
  mainNetwork: string;

  constructor(private seriesService: SeriesService) { }

  ngOnInit(): void {
    // Adding the basicUrl for images to the object backdrop_path property
    this.serie.poster_path = GlobalConstants.imagesPosterUrl + this.serie.poster_path;
    const stringId = this.serie.id.toString();
    const serie$ = this.seriesService.getSerie(stringId);
    serie$.subscribe((res) => this.mainNetwork = res.networks[0].name);
  }

}
