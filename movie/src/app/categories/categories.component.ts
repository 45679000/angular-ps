import { Component, OnInit } from '@angular/core';
import { MoviedataService } from "../moviedata.service";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categoriez:any;
  movieId = 0;

  constructor(private movieService: MoviedataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.movieService.fetchCategories().subscribe(data =>{
      console.log(data);
      this.categoriez = data;
    });
    this.route.params.subscribe(data=>{
      this.movieId = data.id
    });

  }
  

}
