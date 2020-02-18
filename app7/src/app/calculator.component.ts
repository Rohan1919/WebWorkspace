import { Component } from '@angular/core';
import { summaryFileName } from '@angular/compiler/src/aot/util';

@Component({
    selector:'calculator',
    template:`
    <div id="calcform">
        <form>
            Enter first number : <input type="number" [(ngModel)]=x name='x'/><br/>
            Enter Second number : <input type="number" [(ngModel)]=y name='y'/><br/>
            <button type="submit" (click)="add()" >+</button>
            <button type="submit" (click)="sub()" >-</button><br/>
        </form>
       <div *ngIf="result"><h1>Result is  {{result}}</h1><div>
    </div>   
      
    `,
    styles:['#calcform{margin:auto; width:200px;border-length:2px;}']

})
export class Calculator{
    x:number;
    y:number;
    result:number;
   
    add(){
        this.result=this.x+this.y;
    }
    sub(){
        this.result=this.x-this.y;
    }


    
 
    

}