import { Component, Input, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/app/common/global-constants';
import { SerieListResult } from '../../models/serie-list-result';

@Component({
  selector: 'app-serie-item',
  templateUrl: './serie-item.component.html',
  styleUrls: ['./serie-item.component.scss']
})
export class SerieItemComponent implements OnInit {

  @Input()
  serie: SerieListResult;

  constructor() { }

  ngOnInit(): void {
    // Adding the basicUrl for images to the object backdrop_path property
    this.serie.poster_path = GlobalConstants.imagesPosterUrl + this.serie.poster_path;
  }

}
