import { Component, OnInit } from '@angular/core';
import { product } from '../product';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from "@angular/router";
import { products } from "../products";
import { Observable } from 'rxjs';
import { UploadFilesService } from '../upload-file';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product:product = {
    id: 0,
    name: '',
    price: 0,
    description: '',
    image: '',
    category: ''
  }

  constructor(private productsService: ProductsService,
    private route: ActivatedRoute,private uploadService: UploadFilesService) { 
  }

  ngOnInit(): void {
    this.fileInfos = this.uploadService.getFiles();

    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get("productId"));

    this.getProduct(productIdFromRoute);
    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);
  }

  selectedFiles?: FileList;
  currentFile?: File;
  fileInfos?: Observable<any>;
  submitted = false;

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  getProduct(id): void {
    this.productsService.get(id)
      .subscribe(
        data => {
          this.product = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
      }

    updateProduct(): void {
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
        this.currentFile = file;

        const data = {
          name: this.product.name,
          price: this.product.price,
          description: this.product.description,
          image: this.currentFile.name,
          category: this.product.category
        };
        this.productsService.update(this.product.id, data)
          .subscribe(
            response => {
              console.log(response);
              this.submitted = true;
            },
            error => {
              console.log(error);
            });
      }
    }
  }


  newProduct(): void {
    this.submitted = false;
    this.product = {
      id: 0,
      name: '',
      price: 0,
      description: '',
      image: '',
      category: ''
    };
  }
}
