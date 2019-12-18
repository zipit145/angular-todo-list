import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { List } from './list.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import {MatDividerModule} from '@angular/material/divider';
import { ReactiveFormsModule } from '@angular/forms';


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
    BrowserAnimationsModule,
    MatBottomSheetModule,
    MatDividerModule,
    ReactiveFormsModule
  ],
  exports: [
    List,
  ],
  providers: [],
  bootstrap: [List]
})
export class ListModule { }