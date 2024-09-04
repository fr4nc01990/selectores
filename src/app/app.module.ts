import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectorPageComponent } from './countries/pages/selector-page/selector-page.component';
import { CountriesModule } from './countries/countries.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountriesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
