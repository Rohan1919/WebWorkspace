import { Injectable } from "@angular/core";
import { Employee } from './emp';
import {HttpClient} from "@angular/common/http";



@Injectable({
    providedIn:'root'
})
export class EmpService{
    constructor(private http:HttpClient){}
    
    addEmployee(emp:Employee){
        //code to  hit the  server it nedd here
        
        let url="http://localhost:8181/hibernate-rest-demo/app/emp";
        this.http.post(url,JSON.stringify(emp)).subscribe(data=>{
            JSON.stringify(data);
        });
        
    }
}