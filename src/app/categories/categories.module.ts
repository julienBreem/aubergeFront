import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategoryListComponent} from "./category-list/category-list.component";
import {CategoryFormComponent} from "./category-form/category-form.component";
import {CategoryService} from "./category.service";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {CategoriesComponent} from "./categories.component";
import { CategoryComponent } from './category/category.component';
import {RouterModule, Routes} from "@angular/router";
import {ActivitiesModule} from "../activities/activities.module";
import {CarouselModule} from "../carousel/carousel.module";

const appRoutes: Routes = [
  { path: '', component: CategoriesComponent},
  { path: 'categorie/:id', component: CategoryComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule,
    BrowserModule,
    FormsModule,
    ActivitiesModule,
    CarouselModule
  ],
  declarations: [
    CategoryListComponent,
    CategoryFormComponent,
    CategoriesComponent,
    CategoryComponent
  ],
  exports: [ ],
  providers: [CategoryService]
})
export class CategoriesModule { }
