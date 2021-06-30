import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesMainPageComponent } from './series-main-page.component';

describe('SeriesMainPageComponent', () => {
  let component: SeriesMainPageComponent;
  let fixture: ComponentFixture<SeriesMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriesMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
