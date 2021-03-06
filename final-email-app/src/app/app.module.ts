import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserFoldersComponent } from './user-folders/user-folders.component';
import { UserSearchEmailComponent } from './user-search-email/user-search-email.component';
import { DisplayEmailComponent } from './display-email/display-email.component';
import { MyBadgeDirective } from './my-badge.directive';
import { MyButtonDirective } from './myButton/my-button.directive';
import { InputTextDirective } from './input-text/input-text.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
    UserFoldersComponent,
    UserSearchEmailComponent,
    DisplayEmailComponent,
    MyBadgeDirective,
    MyButtonDirective,
    InputTextDirective
  ],
  imports: [
    BrowserModule, CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }