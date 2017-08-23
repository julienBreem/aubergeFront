import {Component, OnInit} from '@angular/core';

import {Category} from "../category.model";
import {Router} from "@angular/router";
import {CategoryService} from "../category.service";
import {AuthService} from "../../core/auth.service";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit{

  categories: Category[];
  selectedCategory: Category;

  constructor(
      private router: Router,
      private catservice: CategoryService,
      private authService: AuthService,

  ) { }


  ngOnInit() {
    this.getCategories();
  }

  public admin():boolean{
    return this.authService.getAdmin();
  }
  goToCategory(id){
    this.router.navigate(['/categorie', id]);
  }

  new(){
    this.selectCategory(new Category())
  }


  getCategories(): void {
    this.categories = this.catservice.getCategories();
  }
  selectCategory(category: Category){
    if(this.admin()){
      (this.selectedCategory == category)?this.selectedCategory = null : this.selectedCategory = category;
    }

  }
  submitForm(category: Category) {
    this.catservice.save(category);
    this.getCategories();
    this.selectCategory(category);
  }

  deleteCategory(category: Category){
    if(this.admin() && confirm('Êtes vous sûr de vouloir supprimer cette catégories? ( les activités seront aussi supprimées )') ){
      this.selectCategory(null);
      this.catservice.delete(category);
      this.getCategories();
    }

  }
/*
  clone(category){
    if(category){
      return JSON.parse(JSON.stringify(category));
    }
    else return null;
  }
*/

}
