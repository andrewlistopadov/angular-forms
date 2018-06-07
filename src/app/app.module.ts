import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimpleFormModule } from './simple-form/simple-form.module';
import { ReactiveFormModule } from './reactive-form/reactive-form.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SimpleFormModule,
    ReactiveFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
