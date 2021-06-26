import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchReturn } from 'src/app/common/models/search-return';

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

  constructor(private router: Router, private route: ActivatedRoute) { }

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
    this.router.navigate(['search'], {relativeTo: this.route, queryParams: {query: this.valueToSearch}});
  }
}
