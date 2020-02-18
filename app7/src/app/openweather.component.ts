import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({

    selector:'openweather',
    templateUrl:'./openweather.component.html'

})
export class OpenWeather{
    openwea: Openwea=new Openwea();
    weather1 : string;
    constructor(private http:HttpClient){

    }
    onLocation(){
        let url="https://api.openweathermap.org/data/2.5/weather?q="+this.openwea.location+"&APPID=ae474d95aa5f9309cf90505bf1924a33";
        this.http.get(url).subscribe(data=>{
           //this.weather1 =JSON.stringify(data);
          // alert(this.weather);
          this.weather1=data.weather[0].description;
          //alert((data.main.temp)-273);

        })

    }

}

class Openwea{
    location :string;

}