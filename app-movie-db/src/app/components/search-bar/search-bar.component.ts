import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SearchReturn } from 'src/app/common/models/search-return';
import { MoviesService } from 'src/app/modules/movies/services/movies.service';
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
  searchReturn: SearchReturn[] = [];

  constructor(private moviesService: MoviesService, private seriesService: SeriesService) { }

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

  getSearch(resArray: SerieListResult[], inputType: string): void {
    for (const resObject of resArray) {
      const searchObject: SearchReturn = {
        type: inputType,
        id: resObject.id,
        name: resObject.name,
        popularity: resObject.popularity,
        backdrop_path: resObject.backdrop_path
      };
      this.searchReturn.push(searchObject);
    }
  }

  search(): void {
    /* let numPag: number;
    const maxPagLength = 3;
    this.seriesService.searchSeries(this.valueToSearch, 1).subscribe((res) => numPag = res.total_pages);
    if (numPag > 1) {
      for (let i = 1; i < maxPagLength; i++) {
        // Me quede aquí. En hacer la prueba de este bucle de subscripcion
        let searchSeries$ = this.seriesService.searchSeries(this.valueToSearch, i);
        searchSeries$.subscribe((resArray) => {
          this.getSearch(resArray.results, 'tv');
        });
      }
    } */
  }
}
