import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginFormRoutingModule } from './login-form-routing.module';
import { LoginFormService } from './services/login-form.service';



@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LoginFormRoutingModule
  ],
  providers: [LoginFormService]
})
export class LoginFormModule { }