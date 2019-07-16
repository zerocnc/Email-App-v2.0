import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { MessageFormComponent } from './message-form/message-form.component';
import { EmailFormComponent } from './email-form/email-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', component: LoginFormComponent},
  { path: 'signup', component: SignupFormComponent },
  { path: 'message', component: EmailFormComponent },
  { path: '**', component: PageNotFoundComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SignupFormComponent,
    MessageFormComponent,
    EmailFormComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
