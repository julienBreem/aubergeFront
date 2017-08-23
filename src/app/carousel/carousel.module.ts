import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {SliderFormComponent} from "./slider-form/slider-form.component";
import {SliderListComponent} from "./slider-list/slider-list.component";
import {SliderService} from "./slider.service";
import {CarouselComponent} from "./carousel.component";
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule
  ],
  declarations: [
    SliderFormComponent,
    SliderListComponent,
    CarouselComponent
  ],
  exports: [CarouselComponent],
  providers: [SliderService]
})
export class CarouselModule { }
