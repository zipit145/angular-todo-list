import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Header } from './header.component'


@NgModule({
  declarations: [
    Header
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    Header
  ],
  providers: [],
  bootstrap: []
})
export class HeaderModule { }