import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { List } from './list.component'


@NgModule({
  declarations: [
    List
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    List
  ],
  providers: [],
  bootstrap: [List]
})
export class ListModule { }