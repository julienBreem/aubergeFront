import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import {CategoriesModule} from "./categories/categories.module";
import {RouterModule} from "@angular/router";
import {Ng2Bs3ModalModule} from "ng2-bs3-modal/ng2-bs3-modal";
import {CarouselModule} from "./carousel/carousel.module";



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
    CarouselModule,
    Ng2Bs3ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
