import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector:'loginform',
    templateUrl:'./login.component.html'
    /*template:`
    <div style="border-style:solid;border-width:5px;border-color:red">
        <form (ngSubmit)="onValidate()">
            Enter Username : <input type='username' name='user' [(ngModel)]=login.user required/><br>
            Enter Password : <input type='password' name='pass' [(ngModel)]=login.pass required/>
            <button type="submit">Login here</button> 
        </form>
        </div>
    `*/

})
export class Loginform{
    login: Login =new Login();
    tokens:string;
    
    //introducing angular's HTTP API (AJAX API)

    //introducing DI--Injecting HttpClient object

    constructor(private http:HttpClient){

    }
    onValidate(){
        //alert(JSON.stringify(this.login));
       
                let url="https://reqres.in/api/login";
                this.http.post(url,this.login).subscribe(data=>{
                this.tokens=JSON.stringify(data);
                })
         
        
    }

}
class Login{
    email:string;
    password:string;  

}