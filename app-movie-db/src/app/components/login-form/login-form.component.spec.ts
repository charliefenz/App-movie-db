import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;
  let inputs: DebugElement[];
  let emailInput: DebugElement;
  let passwordInput: DebugElement;
  let button: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginFormComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    inputs = fixture.debugElement.queryAll(By.css('input'));
    emailInput = fixture.debugElement.query(By.css('input[type="email"]'));
    passwordInput = fixture.debugElement.query(By.css('input[type="password"]'));
    button = fixture.debugElement.query(By.css('button'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render 2 inputs and 1 button', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    expect(inputs.length).toBe(2);
    expect(buttons.length).toBe(1);
  });

  it('should render an email input and a password input', () => {
    expect(emailInput && passwordInput).not.toBeNull();
  });

  it('should set an invalid form if email and/or password are not provided', () => {
    let loginValidationCaseEmailOrPasswordNotProvided: boolean[] = [];
    let useCases = [
      {emailValue: '', passwordValue: '123456'}, 
      {emailValue: 'test@gmail.com', passwordValue: ''}, 
      {emailValue: '', passwordValue: ''}
    ];

    for (const useCase of useCases) {
      emailInput.nativeElement.value = useCase.emailValue;
      passwordInput.nativeElement.value = useCase.passwordValue;
      emailInput.nativeElement.dispatchEvent(new Event('input'));
      passwordInput.nativeElement.dispatchEvent(new Event('input'));
      button.nativeElement.dispatchEvent(new Event('click'));
      loginValidationCaseEmailOrPasswordNotProvided.push(component.loginForm.valid);  
    }
    expect(loginValidationCaseEmailOrPasswordNotProvided.every((formValidated) => formValidated == false)).toBeTruthy();
  });

  it('should set an invalid form if email doesn\'t have correct format', () => {
    let loginValidationCaseEmailFormatNotOk : Boolean[] = [];
    let useCases = ['testgmail.com', 'test@gmail.com', 'testgmailcom'];
    
    passwordInput.nativeElement.value = "123456";
    passwordInput.nativeElement.dispatchEvent(new Event('input'));

    for (const useCase in useCases) {
      emailInput.nativeElement.value = useCase;
      emailInput.nativeElement.dispatchEvent(new Event('input'));
      button.nativeElement.dispatchEvent(new Event('click'));
      loginValidationCaseEmailFormatNotOk.push(component.loginForm.valid);
    }

    expect(loginValidationCaseEmailFormatNotOk.every((formValidated) => formValidated == false)).toBeTruthy();
  });

  it('should set an invalid form if password it\'s less than 4 characters long', () => {
    let loginValidationCasePasswordBelow4: boolean[] = [];

    emailInput.nativeElement.value = "test@gmail.com";
    emailInput.nativeElement.dispatchEvent(new Event('input'));

    passwordInput.nativeElement.value = "";
    for (let i = 1; i < 4; i++) {
      passwordInput.nativeElement.value += i.toString();
      passwordInput.nativeElement.dispatchEvent(new Event('input'));
      button.nativeElement.dispatchEvent(new Event('click'));
      loginValidationCasePasswordBelow4.push(component.loginForm.valid);
    }
    expect(loginValidationCasePasswordBelow4.every((formValidated) => formValidated == false)).toBeTruthy();
  });

  it('should set a valid form if email has a correct format and password has 4 or more digits', () => {
    let loginValidationCaseEmailAndPasswordAreOk: boolean[] = [];
    let useCases = [
      {emailValue: 'test@gmail.com', passwordValue: '123456'},
      {emailValue: 'test2@hotmail.es', passwordValue: 'a123'}
    ];

    for (const useCase of useCases) {
      emailInput.nativeElement.value = useCase.emailValue;
      passwordInput.nativeElement.value = useCase.passwordValue;
      emailInput.nativeElement.dispatchEvent(new Event('input'));
      passwordInput.nativeElement.dispatchEvent(new Event('input'));
      button.nativeElement.dispatchEvent(new Event('click'));
      loginValidationCaseEmailAndPasswordAreOk.push(component.loginForm.valid);
    }
    expect(loginValidationCaseEmailAndPasswordAreOk.every((formValidated) => formValidated == true)).toBeTruthy();
  });
});
