import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTopRatedMoviesComponent } from './list-top-rated-movies.component';

describe('ListTopRatedMoviesComponent', () => {
  let component: ListTopRatedMoviesComponent;
  let fixture: ComponentFixture<ListTopRatedMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTopRatedMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTopRatedMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
