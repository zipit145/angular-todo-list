import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { List } from './list.component';
import { MatSliderModule } from '@angular/material/slider';


@NgModule({
  declarations: [
    List,
  ],
  imports: [
    BrowserModule,
    MatSliderModule
  ],
  exports: [
    List,
  ],
  providers: [],
  bootstrap: [List]
})
export class ListModule { }