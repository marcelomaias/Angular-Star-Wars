import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';


import { AppComponent }  from './components/app.component';
import { HomeComponent }  from './components/home.component';
import { AboutComponent }  from './components/about.component';
import { routing } from './app.routes';

@NgModule({
  imports:      [ BrowserModule, HttpModule, routing ],
  declarations: [ AppComponent, HomeComponent, AboutComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
