import { Component, OnInit } from '@angular/core';
import {AuthService} from "../core/auth.service";
import {Category} from "./category.model";
import {isUndefined} from "util";
import {CategoryService} from "./category.service";


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  category: Category;
  categories: Category[];
  visible: boolean = false;
  constructor(
      private authService: AuthService,
      private catservice: CategoryService
  ) { }

  ngOnInit() {
    this.getCategories();
  }

  public admin():boolean{
    return this.authService.getAdmin();
  }

  getCategories(): void {
    this.categories = this.catservice.getCategories();
  }

  submitForm(category: Category) {
    this.catservice.save(category);
    this.getCategories();
    this.toggle();
  }

  toggle(arg = undefined){
    if(isUndefined(arg))this.visible = !this.visible;
    else this.visible = arg;
  }

  selectCategory(category) {
    this.category = Object.assign({}, category);
    this.toggle(category);
  }

}
