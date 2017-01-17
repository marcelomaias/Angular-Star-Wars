import { Component } from '@angular/core';

@Component({
  template: `
  <h1>Home</h1>
  <p>Hello {{name}}, this is the home.</p>
  `,
})
export class HomeComponent  { 
    name = 'Baaa';
}
