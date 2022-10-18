import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { NotFoundComponent } from './components/not-found/not-found.component';
// import { AComponent } from './components/a/a.component';
// import { BComponent } from './components/b/b.component';
// import { CComponent } from './components/c/c.component';

@NgModule({
  declarations: [
    AppComponent,
    // NotFoundComponent,
    // AComponent,
    // BComponent,
    // CComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
