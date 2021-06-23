import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SearchReturn } from 'src/app/common/models/search-return';
import { SerieListResult } from 'src/app/modules/series/models/serie-list-result';
import { SeriesService } from 'src/app/modules/series/services/series.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnChanges {

  @Input()
  clickOutsideSearch: boolean;
  inputSearch: boolean;
  valueToSearch: string;
  searchTotalPages = 2;
  searchReturn: SearchReturn[] = [];

  constructor(private seriesService: SeriesService) { }

  ngOnInit(): void {
    this.inputSearch = false;
    this.valueToSearch = null;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.clickOutsideSearch.currentValue !== changes.clickOutsideSearch.previousValue) {
      if (this.clickOutsideSearch) {
        this.closeSearch();
      }
    }
  }

  openSearch(): void {
    this.inputSearch = true;
  }

  closeSearch(): void {
    this.inputSearch = false;
  }

  search(): void {
    let pagesToSearch: number;
    const totalPages$ = this.seriesService.getSearchSeries(1, this.valueToSearch);
    totalPages$.subscribe((resTotalPages) => {
      console.log(resTotalPages.total_pages);
      if (this.searchTotalPages <= resTotalPages.total_pages) {
      pagesToSearch = this.searchTotalPages;
      } else {
        pagesToSearch = resTotalPages.total_pages;
      }
      for (let i = 1; i <= pagesToSearch; i++) {
        const seriesSearch$ = this.seriesService.getSearchSeries(i, this.valueToSearch);
        seriesSearch$.subscribe((resSeriesSearch) => {
          this.searchReturn = this.searchReturn.concat(this.createSearchReturnArray(resSeriesSearch.results, 'tv'));
        });
      }
    });
  }

  private createSearchReturnArray(resArray: SerieListResult[], inputType: string): SearchReturn[] {
    const response: SearchReturn[] = [];
    for (const resObject of resArray) {
      const searchObject: SearchReturn = {
        type: inputType,
        id: resObject.id,
        name: resObject.name,
        popularity: resObject.popularity,
        backdrop_path: resObject.backdrop_path
      };
      response.push(searchObject);
    }
    return response;
  }
}
