import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';

// For routing
import { RouterModule, Routes, Router } from '@angular/router';
import { Page2Component } from './page2/page2.component';
import { Page404Component } from './page404/page404.component';

// TODO: Put in outside file.
const appRoutes: Routes = [
  { path: 'page1/:id', component: Page1Component},
  { path: 'page2/:id', component: Page2Component},
  { path: 'page404/', component: Page404Component},
  { path: '', component: AppComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page404Component,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( appRoutes, { enableTracing: true} // Debugging only
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
