import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Header } from '../header/header.component'
import { List } from '../list/list.component'

@NgModule({
  declarations: [
    AppComponent,
    Header,
    List
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  exports: [
    Header,
    List,
  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
