import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {
  name:string;
  age:number;
  
  emp:Employee[]=[];
  e1:Employee=new Employee();
   
  
  constructor( ){ }

  ngOnInit() {
  }

  add(){
    
    this.emp.push(new Employee(this.e1.name,this.e1.age));
    console.log(this.emp.name);
    console.log(this.emp.id)
   
    
  


}}
