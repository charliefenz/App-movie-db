import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { SearchResponse } from '../../models/search-response';
import { SearchResults } from '../../models/search-results';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})

export class SearchResultComponent implements OnInit {

  valueToSearch: string;
  searchPage: number;
  existingReturn = true;
  resultsLoaded = false;
  mediaTypePerson = 'person';
  searchResultsIdealLength = 10;

  searchResults: SearchResults[]; // Array with movies, series and/or persons in it
  searchResultsLength: number;
  cleanSearchResults: SearchResults[]; // Array with only movies and/or series in it
  cleanSearchResultsLength: number;
  totalSearchableItems: number;
  
  constructor(private searchService: SearchService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe((queryParams) => {
      this.resetResults();
      this.searchService.resetReceptionCounter();
      this.valueToSearch = queryParams.query;
      this.searchPage = 1;
      this.getSearchResults(this.searchPage);
    });
  
    this.searchService.changeDetection
    .subscribe((changesSoFar) => {
      this.executeSearchIfNeeded(changesSoFar);
      this.controlLoaderIcon();
    });
  }

  getSearchResults(searchPage: number): void {
    this.searchService.getSearchResults(this.valueToSearch, searchPage.toString())
    .subscribe((initialSearchResponse) => {
      if (initialSearchResponse.total_pages === 0) {
        this.existingReturn = false;
      } else {
        this.existingReturn = true;
        this.fillProperties(initialSearchResponse);
      }
      this.totalSearchableItems = initialSearchResponse.total_results;
      this.searchService.informCompleteReception();
    });
  }

  executeSearchIfNeeded(changesSoFar: number) : void {
    if (changesSoFar > 0 && this.totalSearchableItems > 0) {
      if (this.cleanSearchResultsLength < this.searchResultsIdealLength && this.searchResultsLength < this.totalSearchableItems) {
        this.searchPage++;
        this.getExtraSearchResults(this.searchPage);
        this.resultsLoaded = false;
      }
    } 
  }

  getExtraSearchResults(searchPage: number): void {
    this.searchService.getSearchResults(this.valueToSearch, searchPage.toString())
    .subscribe((searchResponse) => {
      this.searchResultsLength += searchResponse.results.length;
      this.cleanSearchResults.push(...this.removePersonsFromSearchResults(searchResponse.results));
      this.cleanSearchResultsLength = this.cleanSearchResults.length;
      this.searchService.informCompleteReception();
    });
  }

  controlLoaderIcon(): void {
    if (this.cleanSearchResultsLength >= this.searchResultsIdealLength || this.searchResultsLength == this.totalSearchableItems) {
      this.resultsLoaded = true;
    }
  }

  fillProperties(searchResponse: SearchResponse): void {
    this.searchResultsLength = searchResponse.results.length;
    this.cleanSearchResults = this.removePersonsFromSearchResults(searchResponse.results);
    this.cleanSearchResultsLength = this.cleanSearchResults.length;
  }

  removePersonsFromSearchResults(searchResults: SearchResults[]): SearchResults[] {
    return searchResults.filter(searchItem => searchItem.media_type !== this.mediaTypePerson);
  }

  resetResults(): void {
    this.valueToSearch = '';
    this.searchPage = 1;
    this.searchResults = [];
    this.searchResultsLength = this.searchResults.length;
    this.cleanSearchResults = [];
    this.cleanSearchResultsLength = this.cleanSearchResults.length;
  }

}
