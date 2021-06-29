import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GlobalConstants } from 'src/app/common/classes/global-constants';
import { MovieListResult } from 'src/app/modules/movies/models/movie-list-result';
import { SerieListResult } from 'src/app/modules/series/models/serie-list-result';

@Component({
  selector: 'app-main-item',
  templateUrl: './main-item.component.html',
  styleUrls: ['./main-item.component.scss']
})
export class MainItemComponent implements OnInit, OnChanges {

  @Input()
  movie: MovieListResult;
  @Input()
  serie: SerieListResult;
  @Input()
  itemType: string;
  constructor() { }

  ngOnInit(): void {
    this.movie.poster_path = GlobalConstants.imagesPosterUrl + this.movie.poster_path;
  }

  ngOnChanges(changes: SimpleChanges): void {
    //FIXME Nos quedamos aqui. Hay que arreglar la asignación del posterPath en movies y series. Igual descargando el array sin hacer el pipe async o asignando directamente en el binding como una suma del globalconstant y el resultado
    let posterPath = this.serie.poster_path;
    if(changes.posterPath.previousValue !== changes.posterPath.currentValue) {
      this.serie.poster_path = GlobalConstants.imagesPosterUrl + this.serie.poster_path;
    }
  }

}
