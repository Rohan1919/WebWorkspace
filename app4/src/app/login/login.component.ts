import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user1:string="rohan";
  pass1:string="123";
  user:string;
  pass:string;
  msg:string;
  

  //Injecting Router object
 constructor(private router:Router){}
  login(){
      //if user is valid user show dashboard
    if(this.user1==this.user){
    this.router.navigate(['dashboard']);
    sessionStorage.setItem('user2',this.user);
    sessionStorage.setItem('pass2',this.pass);
    
    }
    else{
      this.msg="Sorry Invalid Username and Password ";
    }

  }
  
}

