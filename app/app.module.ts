import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './components/app.component';
import { PeopleListComponent } from './components/people-list.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, PeopleListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
