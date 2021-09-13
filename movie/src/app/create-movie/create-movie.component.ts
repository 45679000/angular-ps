import { Component, OnInit } from '@angular/core';
import { MoviedataService } from "../moviedata.service";

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {

  nameOfUser:string = ""; 

  constructor(private movieService: MoviedataService) { }

  ngOnInit(): void {
  }
  addNewMovie(form: any){
    //  console.log(form);
     let newMovie = {
       movieId: 0,
       movieTitle: form.value.movieName,
       releaseDate: form.value.relDate,
       movieRating: form.value.movRating,
       movieReview: form.value.movRev,
       category: form.value.movieCat
     }
     this.movieService.addNewMovie(newMovie).subscribe(data=>{
       console.log(data);
       
     })
     form.vale = ' ';
  }

}
