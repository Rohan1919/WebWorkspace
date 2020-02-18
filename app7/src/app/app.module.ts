import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LuckyNumberComponent } from './lucky-number.component';
import { Calculator } from './calculator.component';
import {FormsModule} from '@angular/forms';
import { analyzeNgModules } from '@angular/compiler';
import { CapName } from './capname.component';
import { Loginform } from './loginform.component';
import { HttpClientModule } from '@angular/common/http';
import { OpenWeather } from './openweather.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    LuckyNumberComponent,
    Calculator,CapName,
    Loginform,
    OpenWeather
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
