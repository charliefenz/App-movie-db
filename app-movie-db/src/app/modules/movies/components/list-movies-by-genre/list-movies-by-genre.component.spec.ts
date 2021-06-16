import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMoviesByGenreComponent } from './list-movies-by-genre.component';

describe('ListMoviesByGenreComponent', () => {
  let component: ListMoviesByGenreComponent;
  let fixture: ComponentFixture<ListMoviesByGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMoviesByGenreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMoviesByGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
