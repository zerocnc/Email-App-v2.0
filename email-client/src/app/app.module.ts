import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { MessageFormComponent } from './message-form/message-form.component';
import { EmailFormComponent } from './email-form/email-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainEmailComponent } from './main-email/main-email.component';

// From old assignment
import { DisplayEmailComponent } from './import/display-email/display-email.component';
import { InputTextDirective} from './import/input-text/input-text.directive';
import { MyButtonDirective } from './import/myButton/my-button.directive';
import { UserFoldersComponent } from './import/user-folders/user-folders.component';
import { UserInfoComponent } from './import/user-info/user-info.component';
import { UserSearchEmailComponent } from './import/user-search-email/user-search-email.component';
import { MyBadgeDirective } from './my-badge.directive';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';

const routes: Routes = [
  { path: '', component: LoginFormComponent},
  { path: 'signup', component: SignupFormComponent },
  { path: 'message', component: EmailFormComponent },
  { path: 'email', component: MainEmailComponent},
  { path: '**', component: PageNotFoundComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    DisplayEmailComponent,
    LoginFormComponent,
    SignupFormComponent,
    MessageFormComponent,
    EmailFormComponent,
    PageNotFoundComponent,
    MainEmailComponent,
    InputTextDirective,
    MyButtonDirective,
    UserFoldersComponent,
    UserInfoComponent,
    UserSearchEmailComponent,
    MyBadgeDirective
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
