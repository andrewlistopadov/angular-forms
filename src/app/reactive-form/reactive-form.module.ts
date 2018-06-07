import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form.component';

@NgModule({
  imports: [
    ReactiveFormsModule
  ],
  declarations: [ReactiveFormComponent],
  exports: [ReactiveFormComponent]
})
export class ReactiveFormModule { }
