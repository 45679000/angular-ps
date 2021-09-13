import { Component, OnInit } from '@angular/core';
import { MoviedataService } from "../moviedata.service";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";

@Component({
  selector: 'app-view-movie-by-category',
  templateUrl: './view-movie-by-category.component.html',
  styleUrls: ['./view-movie-by-category.component.css']
})
export class ViewMovieByCategoryComponent implements OnInit {

  moviez:any;
  movieX = 0;

  constructor(private movieService: MoviedataService, private activated: ActivatedRoute) { }

 
  
  ngOnInit(): void {
    this.activated.params.subscribe(catData=>{
      this.movieX = catData.id
    });

    this.movieService.fetchDataByCategory(this.movieX).subscribe(data =>{ 
      this.moviez =data;
    });
    // this.evaluateT();
    // this.displayData();
  }
  
}
