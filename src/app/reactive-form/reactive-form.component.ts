import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
      'firstName': ['Andrei'],
      'lastName': ['Listopadov'],
      'email': ['andrew.listopadov@gmail.com']
    });
  }

  onSubmit(form: any): void {
    alert(`first name: ${form.firstName}\nlastname: ${form.lastName}\nemail: ${form.email}`);
  }

}
