import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-openweather',
  templateUrl: './openweather.component.html',
  styleUrls: ['./openweather.component.css']
})
export class OpenweatherComponent implements OnInit {
  trainNo: string;



  ngOnInit() {
  }
 pnrNo:string;
 trinNo:string;
 
 constructor(private http:HttpClient){


  }

    onStatus(){
      let url="http://localhost:8181/rest-demo/app/pnr?pnrNo="+this.pnrNo;
      this.http.get(url).subscribe(data=>{
         this.trainNo =JSON.stringify(data);
        alert(this.trainNo);
        //this.weather1=data.weather[0].description;
        

      })

  
  }
}
