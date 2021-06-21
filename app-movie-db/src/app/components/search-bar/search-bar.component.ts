import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnChanges {

  @Input()
  clickOutsideSearch: boolean;

  inputSearch: boolean;
  value: string;

  constructor() { }

  ngOnInit(): void {
    this.inputSearch = false;
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
    this.value = '';
  }

}
