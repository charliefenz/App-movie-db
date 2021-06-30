import { Component, Input, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/app/common/classes/global-constants';
import { MovieListResult } from 'src/app/modules/movies/models/movie-list-result';
import { SerieListResult } from 'src/app/modules/series/models/serie-list-result';

@Component({
  selector: 'app-main-item',
  templateUrl: './main-item.component.html',
  styleUrls: ['./main-item.component.scss']
})
export class MainItemComponent implements OnInit {

  @Input()
  movie: MovieListResult;
  @Input()
  serie: SerieListResult;
  @Input()
  itemType: string;

  imgUrl = GlobalConstants.imagesPosterUrl;
  constructor() { }

  ngOnInit(): void {
  }

}
