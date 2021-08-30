import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { cartItem } from './cartItem';



@Injectable()
export class CartService {
  items:cartItem[] = [];

  addToCart(product) {
    let found = false;

    this.items.forEach( (item, index) => {
      if(item.product.name === product.name)
      {
       item.quantity = item.quantity + 1;
       item.subtotal = item.quantity * item.product.price;
       found = true;
      }
    });

    if (!found){
        const cartItem = {
          product: product,
          quantity: 1,
          subtotal: 1 * product.price,
        }
        this.items.push(cartItem);
      }
    } 

  deleteItem(itemName: string)  {
    this.items.forEach( (item, index) => {
      if(item.product.name === itemName) 
      this.items.splice(index,1);
      });
      return this.items;
  }

  updateItem(itemName: string, quantity:number) {
    this.items.forEach( (item, index) => {
      if(item.product.name == itemName) {
        item.quantity = quantity;
        item.subtotal = item.product.price * item.quantity;
      }
    });
    return this.items;
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get("/assets/shipping.json");
  }
  constructor(private http: HttpClient) {}
}
