import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  
  // cities:any[]=[
  //   {state:'Maharashtra',cities:['Mumbai','Pune']},
  //   {state:'Karnataka',cities:['Banglore','Belagaun']},
  //   {state:'Andhra pradesh',cities:['Hyderabad','Secundarabad']}
  // ]
  private state=['Maharashtra','Karnataka','Andhra-Pradesh'];
  private cities=[];
  constructor() { }
  FirstDropDownChanged(val:any){
    console.log(val);
    if(val=='Maharashtra'){
      this.cities=['Mumbai','Pune'];
    }
    else if(val=='Karnataka'){
      this.cities=['Banglore','Belagaun'];
    }
    else if(val=='Andhra-Pradesh'){
      this.cities=['Hyderabad','Secundarabad'];

    }
    else{
      this.cities=[];
    }
  }
  ngOnInit() {
  }

}
