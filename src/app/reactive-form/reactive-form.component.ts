import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      'firstName': ['Andrei', Validators.compose([Validators.required, Validators.minLength(4)])],
      'lastName': ['Listopadov'],
      'email': ['andrew.listopadov@gmail.com', Validators.required]
    });
  }

  onSubmit(form: any): void {
    alert(`first name: ${form.firstName}\nlastname: ${form.lastName}\nemail: ${form.email}`);
  }

  controlHasError(name: string): boolean | null {
    return !this.myForm.controls[name].valid && this.myForm.controls[name].touched ? true : null;
  }

}
