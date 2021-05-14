import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLatestMoviesComponent } from './list-latest-movies.component';

describe('ListLatestMoviesComponent', () => {
  let component: ListLatestMoviesComponent;
  let fixture: ComponentFixture<ListLatestMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLatestMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLatestMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
