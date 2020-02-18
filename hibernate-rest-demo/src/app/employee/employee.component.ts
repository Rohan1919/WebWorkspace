import { Component, OnInit } from '@angular/core';

import { Employee } from '../emp';
import { EmpService } from '../emp.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent  {

 emp:Employee=new Employee();
  constructor(private empService: EmpService) {}
  
  add(){
       
    alert(JSON.stringify(this.emp));
    this.empService.addEmployee(this.emp);
    console.log(this.emp);
  }
 

}