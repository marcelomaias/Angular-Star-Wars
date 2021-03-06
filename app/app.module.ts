import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { routing } from './app.routes';

import { AppComponent }  from './components/app.component';
import { PeopleListComponent } from './components/people-list.component';
import { PersonDetailsComponent } from './components/person-details.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, routing, FormsModule ],
  declarations: [ AppComponent, PeopleListComponent, PersonDetailsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
