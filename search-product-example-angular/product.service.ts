import { Injectable } from '@angular/core';
import { Product } from './list-product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[];

  constructor() { 
    this.products = [
      new Product(1,"Nokia 6600", 5000, "image1.jfif"),
      new Product(2,"Nokia 6820", 5000, "image2.jfif"),
      new Product(3,"Nokia 6830", 5000, "image3.jfif"),
      new Product(4,"Nokia 6840", 5000, "image4.jfif"),
      new Product(5,"Nokia 6677", 5000, "image5.jfif"),
    ];
  }

  fetchProduct(id: number) : Product {
    for(let p of this.products)
      if(p.id == id)
        return p;
    //return this.products.find(p => p.id == id); 
  }

  fetchProducts() : Product[] {
     return this.products;
  }
}
