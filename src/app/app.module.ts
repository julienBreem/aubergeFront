import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import {CategoriesModule} from "./categories/categories.module";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    CategoriesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
