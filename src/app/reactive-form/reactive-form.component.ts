import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  myForm: FormGroup;

  constructor(public fb: FormBuilder) {
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      'firstName': ['Andrei', Validators.required],
      'lastName': ['Listopadov'],
      'email': ['andrew.listopadov@gmail.com', Validators.required]
    });
  }

  onSubmit(form: any): void {
    alert(`form is valid: ${this.myForm.valid}\nfirst name: ${form.firstName}\nlastname: ${form.lastName}\nemail: ${form.email}`);
  }

}
