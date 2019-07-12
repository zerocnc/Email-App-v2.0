import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginBoxComponent } from './login-box/login-box.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { MessageFromFormComponent } from './message-from-form/message-from-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginBoxComponent,
    SignupFormComponent,
    MessageFromFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
