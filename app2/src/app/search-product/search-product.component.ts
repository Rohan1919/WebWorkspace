import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../list-product/product';
@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {

  id:number;
  product: Product[];
  ps1:Product;
  constructor(private ps:ProductService)
   { }

  ngOnInit() {
  }
  show(){
    
    this.product=this.ps.fetchProducts();
    for(var ps1 of this.product){
      if(ps1.id==this.id){
      console.log(ps1.id);
          this.ps1 = ps1;
          console.log(ps1); 
         }
      }

    }
    //this.product.forEach(this.product.id {
      
    
  }
  

      
    
    



