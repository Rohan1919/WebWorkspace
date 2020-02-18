import { Component } from '@angular/core';

@Component({
    selector:'lucky-number',
    template:`
    <button (click)="show()">click here</button>to know your lucky number
    <h1 *ngIf="x"> your lucky number is {{x}}</h1>
    
`
})
export class LuckyNumberComponent{
    x:number
    show(){
        //alert("aaya re....ala re ala output ala..");
    this.x=Math.round(Math.random()*10);
   
}


}