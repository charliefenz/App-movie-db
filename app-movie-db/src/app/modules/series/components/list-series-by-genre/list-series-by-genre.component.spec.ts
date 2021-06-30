import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSeriesByGenreComponent } from './list-series-by-genre.component';

describe('ListSeriesByGenreComponent', () => {
  let component: ListSeriesByGenreComponent;
  let fixture: ComponentFixture<ListSeriesByGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSeriesByGenreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSeriesByGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
