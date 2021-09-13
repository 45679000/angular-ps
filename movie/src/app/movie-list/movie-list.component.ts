import { Component, OnInit } from '@angular/core';
import { MoviedataService } from "../moviedata.service";
import { Movieinterface } from "../movieinterface";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  // movies: Movieinterface[] ;
  // movieList=[];
  moviez:any;
  movieX = 0;

  constructor(private movieService: MoviedataService, private activated: ActivatedRoute) { }

  ngOnInit(): void {
    this.movieService.fetchData().subscribe(data =>{ 
      console.log(data);
      this.moviez =data;
    });
    this.activated.params.subscribe(data=>{
      this.movieX = data.id
    });
  }
  backcolor = "red";
}
