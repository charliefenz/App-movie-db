import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSeriesByGenreSelectorComponent } from './list-series-by-genre-selector.component';

describe('ListSeriesByGenreSelectorComponent', () => {
  let component: ListSeriesByGenreSelectorComponent;
  let fixture: ComponentFixture<ListSeriesByGenreSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSeriesByGenreSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSeriesByGenreSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
