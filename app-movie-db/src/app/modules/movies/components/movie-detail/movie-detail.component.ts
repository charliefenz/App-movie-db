import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetail } from '../../models/movie-detail';
import { MoviesService } from '../../services/movies.service';
import { Observable } from 'rxjs';
import { GlobalConstants } from 'src/app/common/global-constants';
import { MovieCast } from '../../models/movie-cast';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movie$: Observable<MovieDetail>;
  cast: MovieCast[];
  backdropPath: string;
  posterPath: string;
  hasWebPage = false;

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.movie$ = this.moviesService.getMovie(params.id);
    });

    // Complete backdropPath, posterPath and determining if it has web
    this.movie$.subscribe((res) => {
      this.backdropPath = `Url(${GlobalConstants.imagesBackdropUrl + res.backdrop_path})`;
      if (res.poster_path !== null) {
        this.posterPath = GlobalConstants.imagesPosterUrl + res.poster_path;
      } else {
        this.posterPath = '../../../../assets/images/no-image.png';
      }
      if (res.homepage !== '') {
        this.hasWebPage = true;
      }
      this.getCredits(res.id);
    });
  }

  private getCredits(id: number): void {
    const credits$ = this.moviesService.getCredits(id).subscribe((res) => {
      this.cast = res.cast;
    });
  }
}
