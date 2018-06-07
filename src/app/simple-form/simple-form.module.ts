import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SimpleFormComponent } from './simple-form.component';

@NgModule({
  imports: [
    // CommonModule,
    FormsModule
  ],
  declarations: [SimpleFormComponent],
  exports: [SimpleFormComponent]
})
export class SimpleFormModule { }
