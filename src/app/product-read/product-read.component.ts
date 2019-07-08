import { Component, OnInit } from '@angular/core';
import Product from '../Product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[];
  constructor(private ps: ProductsService) { }

  ngOnInit() {
    this.ps.getProducts().subscribe((data: Product[]) => {
        this.products = data;
    });
  }

  deleteProduct(id) {
    this.ps.deleteProduct(id).subscribe(res => {
      console.log(id);
      this.products.splice(id, 1);
    });
  }

}
