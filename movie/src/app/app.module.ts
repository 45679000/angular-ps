import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CategoriesComponent } from './categories/categories.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { HttpClientModule } from "@angular/common/http";
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ViewMovieByCategoryComponent } from './view-movie-by-category/view-movie-by-category.component';
import { CreateMovieComponent } from './create-movie/create-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriesComponent,
    MovieListComponent,
    MovieDetailComponent,
    ViewMovieByCategoryComponent,
    CreateMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
