import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from "./movie-list/movie-list.component"
import { MovieDetailComponent } from "./movie-detail/movie-detail.component";
import { ViewMovieByCategoryComponent } from "./view-movie-by-category/view-movie-by-category.component";
import { CreateMovieComponent } from "./create-movie/create-movie.component";

const routes: Routes = [
  {
    path: '',
    component: MovieListComponent
  },
  {
    path: 'categories/:id',
    component: ViewMovieByCategoryComponent
  },
  {
    path: 'details/:id',
    component: MovieDetailComponent
  },
  {
    path: 'create-movie',
    component: CreateMovieComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
