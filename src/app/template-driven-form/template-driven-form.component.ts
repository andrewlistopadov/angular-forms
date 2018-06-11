import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

export class User {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;

  constructor(firstName = '', lastName = '', email = '', phoneNumber = '') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
  }
}

@Component({
  selector: 'template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  user: User;

  constructor() { }

  ngOnInit() {
    this.user = new User('Andrei', '', 'andrew.listopadov@gmail.com', '+79998887766');
  }

  onSubmit(user: User): void {
    alert(`first name: ${user.firstName}\nlastname: ${user.lastName}\nemail: ${user.email}\nphone: ${user.phoneNumber}`);
  }

  controlIsInvalid(control: FormControl): boolean | null {
    return control && control.invalid && control.touched ? true : null;
  }

  controlHasError(control: FormControl, error: string): boolean | null {
    return control && control.errors && control.errors[error] ? true : null;
  }

}
