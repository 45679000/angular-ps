import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../products.service";

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit {

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.displayJson();
  }
  logThis(){
    this.productService.displayJson();
  }
}
