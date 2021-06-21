import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-movie-db';
  clickOutsideSearch = true;

  @HostListener('click', ['$event'])
  onClick(btn): void {
    const targetId = btn.target.id;
    if (targetId === 'search-icon' || targetId === 'search-input') {
      this.clickOutsideSearch = false;
    } else {
      this.clickOutsideSearch = true;
    }
  }
}
