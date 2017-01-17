import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
          <nav class="mdl-navigation">
            <a [routerLink]="['/home']">Home</a>
            <a [routerLink]="['/about']">About</a>
          </nav>
          <router-outlet></router-outlet>
  `,
})
export class AppComponent  { }
