import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetail } from '../../models/movie-detail';
import { MoviesService } from '../../services/movies.service';
import { Observable } from 'rxjs';
import { GlobalConstants } from 'src/app/common/global-constants';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movie$: Observable<MovieDetail>;
  backdropPath: string;
  posterPath: string;
  hasWebpage = false;

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.movie$ = this.moviesService.getMovie(params.id);
    });

    // Complete backdropPath and posterPath
    this.movie$.subscribe((res) => {
      this.backdropPath = `Url(${GlobalConstants.imagesBackdropUrl + res.backdrop_path})`;
      this.posterPath = GlobalConstants.imagesPosterUrl + res.poster_path;
      if (res.homepage !== '') {
        this.hasWebpage = true;
      }
    });

  }

}
