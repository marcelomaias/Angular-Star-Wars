import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './components/app.component';
import { PeopleListComponent } from './components/people-list.component';
import { PersonDetailsComponent } from './components/person-details.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, PeopleListComponent, PersonDetailsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
