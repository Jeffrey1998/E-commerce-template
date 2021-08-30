import { Component } from "@angular/core";
import { Capability } from "protractor";
import { CartService } from "../cart.service";

import { products } from "../products";
import { product } from '../product'; 
import { ProductsService } from 'src/app/products.service';



@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent {
  products = products;
  Tool = '';
  searchTool = '';
  sortByParam;
  filterToolCategory = '';

  constructor(private productsService: ProductsService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.retrieveProducts();
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert("Your product has been added to the cart!");
  }
  submitted = false;
  
  onToolFilter() {
    this.searchTool = this.Tool;
  }
  
  retrieveProducts(): void {
    this.productsService.getAll()
      .subscribe(
        data => {
          this.products = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


  onToolFilterClear() {
    this.searchTool = '';
    this.Tool = '';
  }

  onFilterToolCategory() {
    this.filterToolCategory = this.Tool;
  }
}


