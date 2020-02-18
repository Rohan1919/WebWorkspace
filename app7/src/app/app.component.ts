import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>
        Welcome to {{title}}!
      </h1>
      <hello></hello>
      <lucky-number></lucky-number>
      <calculator></calculator>
      <capname></capname>
      <loginform></loginform>
      <openweather></openweather>
    
    </div>
    
    
  `,
  styles: []
})
export class AppComponent {
  title = 'app7';
}
