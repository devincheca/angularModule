import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { InfoDetailComponent } from './info-detail/info-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    InfoDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
