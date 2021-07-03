import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchBarComponent } from './components/layout/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { SearchResultComponent } from './modules/search/components/search-result/search-result.component';
import { SearchItemComponent } from './modules/search/components/search-item/search-item.component';
import { FocusDirective } from './directives/focus.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchBarComponent,
    SearchResultComponent,
    SearchItemComponent,
    FocusDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
