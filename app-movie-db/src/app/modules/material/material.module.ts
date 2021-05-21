import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule
  ],
  exports: [
    MatIconModule,
    MatCardModule,
    MatChipsModule
  ]
})
export class MaterialModule { }
