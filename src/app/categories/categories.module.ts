import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategoryListComponent} from "./category-list/category-list.component";
import {CategoryDetailComponent} from "./category-detail/category-detail.component";
import {CategoryService} from "./category.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CategoryListComponent,
    CategoryDetailComponent
  ],
  exports: [
    CategoryListComponent
  ],
  providers: [CategoryService]
})
export class CategoriesModule { }
