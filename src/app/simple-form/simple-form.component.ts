import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: any): void {
    alert(`first name: ${form.firstName}\nlastname: ${form.lastName}\nemail: ${form.email}`);
  }

}
