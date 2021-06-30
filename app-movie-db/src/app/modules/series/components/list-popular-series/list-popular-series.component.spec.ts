import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPopularSeriesComponent } from './list-popular-series.component';

describe('ListPopularSeriesComponent', () => {
  let component: ListPopularSeriesComponent;
  let fixture: ComponentFixture<ListPopularSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPopularSeriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPopularSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
