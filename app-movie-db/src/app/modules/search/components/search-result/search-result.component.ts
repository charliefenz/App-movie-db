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
  searchPage = 1;
  searchResponse: SearchResponse[];
  searchResponseIdealLength = 10;
  existingReturn = true;
  mediaTypePerson = 'person';
  rawSearchResponseLength: number;
  searchResponseCleaned: SearchResponse[];
  searchResponseCleanedLength: number;
  searchResponseObjectTotalItems: number;
  
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

  getSearchResults(searchPage: number): void {
    const routeQuery$ = this.route.queryParams;
    routeQuery$
    .pipe(
      mergeMap((queryObject) => {
        this.valueToSearch = queryObject.query;
        return this.searchService.getSearchResults(this.valueToSearch, searchPage.toString());
      })
    )
    .subscribe((searchResponseObject) => {
      if (searchResponseObject.total_pages === 0) {
        this.existingReturn = false;
      } else {
        this.fillProperties(searchResponseObject);
      }
      this.searchResponseObjectTotalItems = searchResponseObject.total_results;
      this.searchService.informCompleteReception();
    });
  }

  getExtraSearchResults(searchPage: number): void {
    this.searchService.getSearchResults(this.valueToSearch, searchPage.toString())
    .subscribe((subsequentSearchResponseObject) => {
      this.rawSearchResponseLength += subsequentSearchResponseObject.results.length;
      this.searchResponseCleaned.push(...this.removePersonsFromSearchResult(subsequentSearchResponseObject.results));
      this.searchResponseCleanedLength = this.searchResponseCleaned.length;
      this.searchService.informCompleteReception();
    });
  }

  fillProperties(searchResponseObject: SearchResponseObject): void {
    this.rawSearchResponseLength = searchResponseObject.results.length;
    this.searchResponseCleaned = this.removePersonsFromSearchResult(searchResponseObject.results);
    this.searchResponseCleanedLength = this.searchResponseCleaned.length;
  }

  removePersonsFromSearchResult(rawSearchResponse: SearchResponse[]): SearchResponse[] {
    return rawSearchResponse.filter(searchItem => searchItem.media_type !== this.mediaTypePerson);
  }
}
