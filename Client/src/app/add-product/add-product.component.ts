import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { product } from '../product';
import { ProductsService } from '../products.service';
import { UploadFilesService } from '../upload-file';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product:product = {
    id: 0,
    name: '',
    price: 0,
    description: '',
    image: '',
    category: ''
  }
  selectedFiles?: FileList;
  currentFile?: File;
  fileInfos?: Observable<any>;
  submitted = false;
  
  constructor(private productsService: ProductsService, private http: HttpClient,
    private uploadService: UploadFilesService) { }

  ngOnInit(): void {
    this.fileInfos = this.uploadService.getFiles();
  }
  
  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  saveProducts(): void {
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
        this.currentFile = file;
      }
    }
    const data = {
      name: this.product.name,
      price: this.product.price,
      description: this.product.description,
      image: this.currentFile.name,
      category: this.product.category
    };

    this.productsService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
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
