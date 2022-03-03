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
    this.searchService.changeDetection.subscribe((change) => {
      if (change > 0 && this.searchResponseObjectTotalItems > 0) {
        if (this.searchResponseCleanedLength < this.searchResponseIdealLength && this.rawSearchResponseLength < this.searchResponseObjectTotalItems) {
          this.searchPage++;
          this.getExtraSearchResults(this.searchPage);
        }
      }
    });
    this.getSearchResults(this.searchPage);
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

  fillProperties(searchResponseObject: SearchResponseObject): void {
    this.rawSearchResponseLength = searchResponseObject.results.length;
    this.searchResponseCleaned = this.removePersonsFromSearchResult(searchResponseObject.results);
    this.searchResponseCleanedLength = this.searchResponseCleaned.length;
  }

  removePersonsFromSearchResult(rawSearchResponse: SearchResponse[]): SearchResponse[] {
    return rawSearchResponse.filter(searchItem => searchItem.media_type !== this.mediaTypePerson);
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
}
