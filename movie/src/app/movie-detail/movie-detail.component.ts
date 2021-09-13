import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { MoviedataService } from "../moviedata.service";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movieId = 0;
  movieDetails: any;

  constructor(private route: ActivatedRoute, private movieService: MoviedataService) { 
  }

  ngOnInit(): void {
    this.route.params.subscribe(data=>{
      this.movieId = data.id      
    });
    this.movieService.fetchMovieMoreDetails(this.movieId).subscribe(movieData =>{
      this.movieDetails = movieData;
    });
  }

}
