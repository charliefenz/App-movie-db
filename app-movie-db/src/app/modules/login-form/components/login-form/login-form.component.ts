import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginFormService } from '../../services/login-form.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  showValidationErrors = false;

  constructor(private formBuilder: FormBuilder, private loginFormService: LoginFormService) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]] 
    });
  }

  get emailControl() {return this.loginForm.get('email');}

  get passwordControl() {return this.loginForm.get('password');}

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.showValidationErrors = false;
      this.loginFormService.login(this.loginForm.value).then(res => console.log(res));
    } else {
      this.showValidationErrors = true;
    }
  }
}
