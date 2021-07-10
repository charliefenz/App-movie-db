import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalConstants } from 'src/app/common/classes/global-constants';
import { MoviesAndSeriesService } from 'src/app/modules/movies-and-series/services/movies-and-series.service';
import { Network } from '../../models/networks';
import { Season } from '../../models/seasons';
import { SeriesCast } from '../../models/serie-cast';
import { SerieDetail } from '../../models/serie-detail';
import { SeriesService } from '../../services/series.service';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.scss']
})
export class SerieDetailComponent implements OnInit {

  serie$: Observable<SerieDetail>;
  cast: SeriesCast[];
  backdropPath: string;
  posterPath: string;
  networks: Network[] = [];
  hasWebPage = false;
  showEpisodes = false;
  seasonInfo = {serieId: 0, seasonNumber: 0};
  countryNameEsp: string;

  constructor(private route: ActivatedRoute, private seriesService: SeriesService, private generalService: MoviesAndSeriesService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.serie$ = this.seriesService.getSerie(params.id);
      this.seasonInfo.serieId = params.id;
      this.seasonInfo.seasonNumber = 0;
    });

    // Complete URL of backdropPath, posterPath, Networks.logo_path and determining if it has web
    this.serie$.subscribe((res) => {
      this.backdropPath = `Url(${GlobalConstants.imagesBackdropUrl + res.backdrop_path})`;
      if (res.poster_path !== null) {
        this.posterPath = GlobalConstants.imagesPosterUrl + res.poster_path;
      } else {
        this.posterPath = '../../../../assets/images/no-image.png';
      }
      for (const item of res.networks) { this.fillNetworks(item); }
      if (res.homepage !== '') {
        this.hasWebPage = true;
      }
      this.getCredits(res.id);
      // Get Country full name
      const countryNameEsp$ = this.generalService.getCountryName(res.origin_country[0]);
      countryNameEsp$.subscribe((countryRes) => this.countryNameEsp = countryRes.translations.es);
    });
  }

  private fillNetworks(item: Network): void {
    const network: Network = {
      name: item.name,
      id: item.id,
      logo_path: `${GlobalConstants.imagesPosterUrl + item.logo_path}`,
      origin_country: item.origin_country
    };
    this.networks.push(network);
  }

  private getCredits(id: number): void {
    const credits$ = this.seriesService.getCredits(id).subscribe((res) => this.cast = res.cast);
  }

  listEpisodes(season: Season): void {
    this.showEpisodes = true;
    this.seasonInfo.seasonNumber = season.season_number;
  }
}
