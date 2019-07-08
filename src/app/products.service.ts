import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url = 'http://localhost:4000/products';

  constructor(private http: HttpClient, private router: Router) { }

  // Create method to add product
  addProduct(ProductName, ProductDescription, ProductPrice) {
    const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };
    this.http.post(this.url + '/add', obj).subscribe(res => {
        this.router.navigate(['products']);
        this.http.get(this.url);
    });
  }
  
  // Get method to retrieve all products
  getProducts() {
    return this.http.get(this.url);
  }

  // Edit method to get current Id
  editProduct(id) {
    return this.http.get(this.url + '/edit/' + id);
  }

  // Update method to edit product
  updateProduct(ProductName, ProductDescription, ProductPrice, id) {
    const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };
    this.http.post(this.url + '/update/' + id , obj).subscribe(res => 
        this.http.get(this.url)
    );
  }
 
  // Delete method to delete product
  deleteProduct(id) {
      console.log(id)
    return this.http.get(this.url + '/delete/' + id);
  }
}