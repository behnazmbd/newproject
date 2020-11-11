import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PackageComponent } from './package/package.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
// import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { PageComponent } from './page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PackageComponent,
    AboutComponent,
    ContactComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    // RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
