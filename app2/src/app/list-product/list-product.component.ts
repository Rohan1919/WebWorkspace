import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import {Product} from './product';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  product: Product[];
  constructor(private ps:ProductService) { }
  

  /*onShow(){
   this.product=[ 
    {id:1,name:"nokia 6600",price:5000,im:"https://images.daznservices.com/di/library/GOAL/cc/a0/cristiano-ronaldo-juventus-2019-20_1dg5p2fbyf8hw182u0j44cul7x.jpg?t=-996007265&quality=100"},
    {id:2,name:"nokia 6800",price:8000,im:"http://images6.fanpop.com/image/photos/43000000/Raw-8-19-19-Roman-Reigns-vs-Dolph-Ziggler-wwe-43044562-1200-1200.jpg"},
    {id:3,name:"nokia 6200",price:7000,im:"https://www.pexels.com/photo/asphalt-autumn-beauty-colorful-237018"},
    {id:4,name:"nokia 6300",price:6000,im:"https://www.shutterstock.com/image-photo/beautiful-landscape-mountain-layer-morning-sun-753385105"},
    {id:5,name:"nokia 5600",price:3000,im:"https://www.pexels.com/photo/aerial-view-of-seashore-near-large-grey-rocks-853199"},
   ]
  }*/
   /*onShow(){
     this.product=[ 
        new Product(1,"nokia 6600",5000,"https://images.daznservices.com/di/library/GOAL/cc/a0/cristiano-ronaldo-juventus-2019-20_1dg5p2fbyf8hw182u0j44cul7x.jpg?t=-996007265&quality=100"),
        new Product(2,"nokia 6800",8000,"http://images6.fanpop.com/image/photos/43000000/Raw-8-19-19-Roman-Reigns-vs-Dolph-Ziggler-wwe-43044562-1200-1200.jpg"),
        new Product(3,"nokia 6200",7000,"https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjMrYPymZTnAhWaFogKHZ-dC5UQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.pri.org%2Fstories%2F2019-08-09%2F20-years-putin-power-timeline&psig=AOvVaw0UASQQqLrhHEgsH88WFry-&ust=1579679172210277/ww"),
        new Product(4,"nokia 6300",6000,"https://foreignpolicy.com/wp-content/uploads/2018/03/putin.jpg?resize=800,533&quality=90"),
        new Product(5,"nokia 5600",3000,"https://www.pexels.com/photo/aerial-view-of-seashore-near-large-grey-rocks-853199"),
      ]
     
   }*/

  ngOnInit() {

  }
onShow(){
  this.product=this.ps.fetchProducts();
}

}
