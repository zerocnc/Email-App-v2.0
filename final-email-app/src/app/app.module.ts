import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserFoldersComponent } from './user-folders/user-folders.component';
import { UserSearchEmailComponent } from './user-search-email/user-search-email.component';
import { DisplayEmailComponent } from './display-email/display-email.component';

@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
    UserFoldersComponent,
    UserSearchEmailComponent,
    DisplayEmailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
