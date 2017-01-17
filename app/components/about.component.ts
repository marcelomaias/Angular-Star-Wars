import { Component } from '@angular/core';

@Component({
  template: `
  <h1>About</h1>
  <p>Hello {{name}}, this is the about page.</p>
  `,
})
export class AboutComponent  { 
    name = 'Baaa';
}