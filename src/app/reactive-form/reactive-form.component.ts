import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  personalDataForm: FormGroup;

  constructor(formBuilder: FormBuilder) { 
    this.personalDataForm = formBuilder.group({
      'firstName': ['Andrei'],
      'lastName': ['Listopadov'],
      'email': ['andrew.listopadov@gmail.com']
    });
  }

  ngOnInit() {
  }

}
