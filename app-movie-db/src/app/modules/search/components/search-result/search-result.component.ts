import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { SearchService } from '../../services/search.service';
import { SearchResponse } from '../../models/search-response';
import { SearchResponseObject } from '../../models/search-response-object';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  valueToSearch: string;
  searchTotalPages = 2;
  searchReturn: SearchReturn[];
  existingReturn = true;

  constructor(private searchService: SearchService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getValueFromRoute();
    this.checkValidResponse();
    if (this.existingReturn) {

    }
    
  }

  getValueFromRoute(): void {
    this.route.queryParams.subscribe((routeParams) => {
      this.valueToSearch = routeParams.query;
    });
  }

  checkValidResponse(): void {
    const searchResponse$ = this.searchService.getSearchResults(this.valueToSearch, '1');
    searchResponse$.subscribe((res) => {
      if (res.total_results === 0) {
        this.existingReturn = false;
      } else {
        this.existingReturn = true;
      }
    });
  }

  //TODO: This needs to be clearer
  
  getSearchResults(): void {
    this.searchReturn = [];
    let pagesToSearch: number;

    //TODO Test how to sort the response by popularity


    const totalSeriesPages$ = this.seriesService.getSearchSeries(1, this.valueToSearch);
    const totalMoviesPages$ = this.moviesService.getSearchMovies(1, this.valueToSearch);

        // if (this.searchTotalPages <= restotalSeriesPages.total_pages) {
        //   pagesToSearch = this.searchTotalPages;
        // } else {
        //   pagesToSearch = restotalSeriesPages.total_pages;
        // }
        // Loop of subscriptions to the API to firstly get the series response for each API page
        for (let i = 1; i <= pagesToSearch; i++) {
          const seriesSearch$ = this.seriesService.getSearchSeries(i, this.valueToSearch);
          seriesSearch$.subscribe((resSeriesSearch) => {
            const searchSeriesResults = this.createSearchReturnArray(resSeriesSearch.results, 'tv');
            this.searchReturn = this.searchReturn.concat(searchSeriesResults); // Extracting the results to the local component array
            // If statement to instruct to go for the mmovies response once it has finished with the series response
            if (i === pagesToSearch) {
              // First subscription to check the max length of the returned array
              totalMoviesPages$.subscribe((restotalMoviesPages) => {
                if (this.searchTotalPages <= restotalMoviesPages.total_pages) {
                  pagesToSearch = this.searchTotalPages;
                } else {
                  pagesToSearch = restotalMoviesPages.total_pages;
                }
                // 2nd Loop of subscriptions to the API to get the movies response for each API page
                for (let j = 1; j <= pagesToSearch; j++) {
                  const MoviesSearch$ = this.moviesService.getSearchMovies(i, this.valueToSearch);
                  MoviesSearch$.subscribe((resMoviesSearch) => {
                    const searchMoviesResults = this.createSearchReturnArray(resMoviesSearch.results, 'movie');
                    this.searchReturn = this.searchReturn.concat(searchMoviesResults); // Adding the results to the local component array
                  });
                }
              });
            }          
          });
        }
  }

  private createSearchReturnArray(resArray: any, inputType: string): SearchReturn[] {
    let posterPath: string;
    const response: SearchReturn[] = [];
    // If statement to accurately ask for the title or the name depending on wether it is treating a series or a movie
    if (inputType === 'tv') {
      for (const resObject of resArray) {
        if (resObject.poster_path !== null) {
          posterPath = GlobalConstants.imagesPosterUrl + resObject.poster_path;
        } else {
          posterPath = '../../../assets/images/no-image.png';
        }
        const searchObject: SearchReturn = {
          type: inputType,
          id: resObject.id,
          nameOrTitle: resObject.name,
          popularity: resObject.popularity,
          poster_path: posterPath
        };
        response.push(searchObject);
      }
    } else {
      for (const resObject of resArray) {
        if (resObject.poster_path !== null) {
          posterPath = GlobalConstants.imagesPosterUrl + resObject.poster_path;
        } else {
          posterPath = '../../../assets/images/no-image.png';
        }
        const searchObject: SearchReturn = {
          type: inputType,
          id: resObject.id,
          nameOrTitle: resObject.title,
          popularity: resObject.popularity,
          poster_path: posterPath
        };
        response.push(searchObject);
      }
    }
    return response;
  }
}
