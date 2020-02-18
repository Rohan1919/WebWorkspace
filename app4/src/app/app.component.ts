import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
     <a routerLink="/login">Login</a> | <a routerLink="/registration">Register</a><br>
    
    </div>
   <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'app4';
}
