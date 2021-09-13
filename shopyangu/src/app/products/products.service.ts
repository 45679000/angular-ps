import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

interface Post{
  name:string;
  belt:string;
}
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  displayJson(){
    const names = "http://localhost:3000/products" 
    return this.httpClient.get(names).subscribe(
      (data) => console.log(data)
    );
  }
  logMessage(){
    console.log('I am logged');
  }
  // getJsonProduct():Observable<Post[]>{
  //   const names = "http://localhost:3000/products" ;
  //   // return this.httpClient.get('names');
  // }
}
