import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { MatIconModule} from '@angular/material/icon';

import { FormsModule } from '@angular/forms';
import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductAlertsComponent } from "./product-alerts/product-alerts.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { CartService } from "./cart.service";
import { CartComponent } from "./cart/cart.component";
import { HttpClientModule } from "@angular/common/http";
import { ShippingComponent } from "./shipping/shipping.component";

import { NgxNumberSpinnerModule } from 'ngx-number-spinner';
import { FilterPipe } from './Pipes/filter.pipe';
import { SortPipe } from './Pipes/sort.pipe';
import { SearchCategoryPipe } from './Pipes/search-category.pipe'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { DemoMaterialModule } from './top-bar/material-module';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddProductComponent } from './add-product/add-product.component';
import { NgpImagePickerModule } from 'ngp-image-picker';
import { EditProductComponent } from './edit-product/edit-product.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxNumberSpinnerModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    DemoMaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot([
      { path: "", component: ProductListComponent },
      { path: "products/:productId", component: ProductDetailsComponent },
      { path: "cart", component: CartComponent },
      { path: "add-product", component: AddProductComponent },
      { path: "shipping", component: ShippingComponent },
      { path: "edit-product/:productId", component: EditProductComponent }
    ]),
    BrowserAnimationsModule,
    AppRoutingModule,
    NgpImagePickerModule,
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    FilterPipe,
    SortPipe,
    SearchCategoryPipe,
    AddProductComponent,
    EditProductComponent
  ],
  bootstrap: [AppComponent],
  providers: [CartService]
})

export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
