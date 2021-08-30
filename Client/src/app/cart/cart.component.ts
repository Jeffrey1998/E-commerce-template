
import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

import { FormGroup, FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';

import { CartService } from '../cart.service';
import { cartItem } from '../cartItem';
import { product } from '../product';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items: any;
  form: FormGroup;
  total: number;
  checkoutForm: FormGroup;


  constructor(private fb: FormBuilder,
    private fb2: FormBuilder,
    private cartService: CartService,
    ) {
    this.form = this.fb.group({
      cartitems: this.fb.array([]),
    });
  }

  ngOnInit() {
    // push to card
      const carts = this.form.get('cartitems') as FormArray;
      this.items = this.cartService.getItems();
      this.total = 0;
      this.items.forEach((item) => {
        carts.push(this.newCartItem(item));
        this.total = this.total + item.subtotal;
      });

      this.checkoutForm = this.fb2.group({
        name: new FormControl('', [Validators.required]),
        address: new FormControl('', [Validators.required])
      });
  }

  newCartItem(item): FormGroup {
  
    return this.fb.group({
      name: item.product.name,
      price: item.product.price,
      quantity: item.quantity,
      subtotal: item.subtotal
    });
  }

  onSubmit(): void {
    // Process checkout data here
  }

  onDelete(ItemName:string) {
    const carts = this.form.get('cartitems') as FormArray;

    this.items = this.cartService.deleteItem(ItemName);
    carts.clear();
    this.total = 0;
    this.items.forEach((item) => {
      carts.push(this.newCartItem(item));
      this.total = this.total + item.subtotal;
    });
  }

  onUpdate(event, itemName:string) {
    this.items = this.cartService.updateItem(itemName, event);

    const carts = this.form.get('cartitems') as FormArray;
    carts.clear();
    this.total = 0;
    this.items.forEach((item) => {
      carts.push(this.newCartItem(item));
      this.total = this.total + item.subtotal;
    });
  }
  submitData() {
    
  }


}