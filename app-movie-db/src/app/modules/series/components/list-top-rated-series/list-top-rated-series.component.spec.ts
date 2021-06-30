import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTopRatedSeriesComponent } from './list-top-rated-series.component';

describe('ListTopRatedSeriesComponent', () => {
  let component: ListTopRatedSeriesComponent;
  let fixture: ComponentFixture<ListTopRatedSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTopRatedSeriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTopRatedSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
