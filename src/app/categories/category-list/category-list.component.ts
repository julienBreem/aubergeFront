import {Component, EventEmitter, Input, Output} from '@angular/core';

import {Category} from "../category.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent {
  @Input()
  admin: boolean = false;

  @Input()
  categories: Category[];

  @Output()
  select: EventEmitter<Category> = new EventEmitter<Category>();


  selectedCategory: Category;

  constructor(
      private router: Router
  ) { }

  goToCategory(id){
    this.router.navigate(['/categorie', id]);
  }

  new(){
    this.selectCategory({
      id:null,
      name:"",
      description:"",
      image:""
    })
  }

  selectCategory(category: Category){
    if(this.admin){
      (this.selectedCategory == category)?this.selectedCategory = null : this.selectedCategory = category;
      this.select.emit(this.selectedCategory);
    }

  }


}
