import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from './search-routing.module';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [SearchResultComponent, SearchItemComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    MaterialModule
  ]
})
export class SearchModule { }
