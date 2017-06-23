import { Component, OnInit } from '@angular/core';
import {Category} from "../category.model";
import {CategoryService} from "../category.service";
import {AuthService} from "../../core/auth.service";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[];
  selectedCategory: Category;

  constructor(
      private categoryService: CategoryService,
      private authService: AuthService,
  ) { }

  ngOnInit() {
    this.getCategories();
  }
  getCategories(): void {
    this.categories = this.categoryService.getCategories();
  }

  admin():boolean{
    return this.authService.getAdmin();
  }
  selectCategory(category: Category){
    if(this.admin()){
      this.selectedCategory = category;
    }

  }


}
