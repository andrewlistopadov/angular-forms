import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: any): void {
    alert(`first name: ${form.firstName}\nlastname: ${form.lastName}\nemail: ${form.email}`);
  }

}
