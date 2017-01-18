import { Component } from '@angular/core';
import { PeopleService } from './../people.service';

@Component({
    selector: 'app',
    template: `
    <h1>{{title}}</h1>
    <router-outlet></router-outlet>
    `,
    // HERE! This registers the PeopleService 
    // now Angular 2 knows to inject it when required
    providers: [PeopleService]
})
export class AppComponent {
    title: String = 'Star Wars PPlz!!!';
}