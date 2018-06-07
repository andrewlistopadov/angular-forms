import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TemplateDrivenFormComponent } from './template-driven-form.component';

@NgModule({
  imports: [
    FormsModule
  ],
  declarations: [TemplateDrivenFormComponent],
  exports: [TemplateDrivenFormComponent]
})
export class TemplateDrivenFormModule { }
