import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMovieByCategoryComponent } from './view-movie-by-category.component';

describe('ViewMovieByCategoryComponent', () => {
  let component: ViewMovieByCategoryComponent;
  let fixture: ComponentFixture<ViewMovieByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMovieByCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMovieByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
