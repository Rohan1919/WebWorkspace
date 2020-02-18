import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../list-product/product';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {

  id: number;
  product: Product;

  constructor(private ps: ProductService) { }

  ngOnInit() {
  }

  search() {
    this.product = this.ps.fetchProduct(this.id);
  }

}
