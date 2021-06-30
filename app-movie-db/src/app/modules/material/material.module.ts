import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule
  ],
  exports: [
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule
  ]
})
export class MaterialModule { }
