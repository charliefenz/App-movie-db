import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalConstants } from 'src/app/common/global-constants';
import { SerieDetail } from '../../models/serie-detail';
import { SeriesService } from '../../services/series.service';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.scss']
})
export class SerieDetailComponent implements OnInit {

  serie$: Observable<SerieDetail>;
  backdropPath: string;
  posterPath: string;
  hasWebPage = false;

  constructor(private route: ActivatedRoute, private seriesService: SeriesService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.serie$ = this.seriesService.getSerie(params.id);
    });

    // Completee backdropPath, posterPath and determining if it has web
    this.serie$.subscribe((res) => {
      this.backdropPath = `Url(${GlobalConstants.imagesBackdropUrl + res.backdrop_path})`;
      this.posterPath = `Url(${GlobalConstants.imagesPosterUrl + res.poster_path})`;
      if (res.homepage !== '') {
        this.hasWebPage = true;
      }
    });
  }

}
