import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMoviesByGenreSelectorComponent } from './list-movies-by-genre-selector.component';

describe('ListMoviesByGenreSelectorComponent', () => {
  let component: ListMoviesByGenreSelectorComponent;
  let fixture: ComponentFixture<ListMoviesByGenreSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMoviesByGenreSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMoviesByGenreSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
