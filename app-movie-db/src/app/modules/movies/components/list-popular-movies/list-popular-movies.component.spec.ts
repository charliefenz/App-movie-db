import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPopularMoviesComponent } from './list-popular-movies.component';

describe('ListPopularMoviesComponent', () => {
  let component: ListPopularMoviesComponent;
  let fixture: ComponentFixture<ListPopularMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPopularMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPopularMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
