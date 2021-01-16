import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  hide = true;
  hideConfirm = true;
  match = true;

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }

  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  passwordConfirm = new FormControl('', [Validators.required]);
  
  getErrorEmptyFirstNameMessage(){
    return this.firstName.hasError('required') ? 'You must enter your first name' : '';
  }

  getErrorEmptyLastNameMessage(){
    return this.lastName.hasError('required') ? 'You must enter your last name' : '';
  }

  getErrorEmailMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getPasswordEmptyMessage(){
    return this.password.hasError('required') ? 'You must enter your password' : '';
  }

  getConfirmPasswordEmptyMessage(){
    return this.password.hasError('required') ? 'You must confirm your password' : '';
  }

  onSubmit(data:any){
    if (data['password'] != data['passwordConfirm']){
      this.match = false;
    }
  }
}
