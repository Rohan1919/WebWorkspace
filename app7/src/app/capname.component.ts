import { Component } from '@angular/core';

@Component({
    selector:'capname',
    template:`
    <div style="border-style:solid;border-width:5px;border-color:red">       
        <form>
        Enter name :<input [(ngModel)]=name name='nm'/>
        <button type='submit' (click)='show()'>click here</button>

        </form><br>
        {{result | uppercase}}
    </div>
    `
})

export class CapName{
    name:string;
    result:string;
    show()
    {
        this.result=this.name;
    }


}