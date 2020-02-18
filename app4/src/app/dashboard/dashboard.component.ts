import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
user3:string;
pass3:string;
  constructor() { }
  a:boolean;
  ngOnInit() {
  }
  onShow(){
    if(sessionStorage.getItem('user2')=='rohan' && sessionStorage.getItem('pass2')=='123'){

       this.user3=sessionStorage.getItem('user2');
       this.pass3=sessionStorage.getItem('pass2');
       return true;

    }
    else{
        return false;
    }
  }

}
