import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { List } from './list.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


@NgModule({
  declarations: [
    List,
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  exports: [
    List,
  ],
  providers: [],
  bootstrap: [List]
})
export class ListModule { }