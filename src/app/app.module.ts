import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WikiSearchHeaderComponent } from './wiki-search-header/wiki-search-header.component';
import { WikiSearchbarComponent } from './wiki-searchbar/wiki-searchbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WikiPageComponent } from './wiki-page/wiki-page.component';

@NgModule({
  declarations: [
    AppComponent,
    WikiSearchHeaderComponent,
    WikiSearchbarComponent,
    WikiPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
