import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Movieinterface } from "./movieinterface";
import { Observable } from 'rxjs';
import { Categories } from "./categories";

@Injectable({
  providedIn: 'root'
})
export class MoviedataService {

  constructor(private httpClient: HttpClient) { }
  fetchData():Observable<Movieinterface>{
    const moviesUrl = "http://localhost:3000/movies";
    return this.httpClient.get<Movieinterface>(moviesUrl);
  }
  fetchCategories():Observable<Categories>{
    const categoriesUrl = "http://localhost:3000/categories";
    return this.httpClient.get<Categories>(categoriesUrl)
  }
  // http://localhost:3000/movies?category=5
  fetchDataByCategory(id: any):Observable<Movieinterface>{
    const moviesUrl = "http://localhost:3000/movies?category=" + id;
    return this.httpClient.get<Movieinterface>(moviesUrl)
  }
  fetchMovieMoreDetails(id: any):Observable<Movieinterface>{
    const moviesUrl = "http://localhost:3000/movies?movieId=" + id;
    return this.httpClient.get<Movieinterface>(moviesUrl)
  }
  addNewMovie(movieBody: any):Observable<Movieinterface>{
    const moviesUrl = "http://localhost:3000/movies";
    return this.httpClient.post<Movieinterface>(moviesUrl, movieBody)

  }
}
