import { Injectable } from '@angular/core';
import {Category} from "./category.model";
import {CATEGORIES} from "./mock-categories";

@Injectable()
export class CategoryService {

  constructor() { }

  getCategories(): Category[] {
    return CATEGORIES;
  }

  getCategory(id): Category{
    for(let i=0; i<CATEGORIES.length;i++){
      if(CATEGORIES[i].id == id){
        return CATEGORIES[i];
      }
    }
  }

  save(categorie: Category){
    if(categorie.id){
      this.update(categorie);
    } else {
      this.add(categorie);
    }
  }

  delete(categorie: Category){
    for(let i=0; i<CATEGORIES.length;i++){
      if(CATEGORIES[i].id == categorie.id){
        CATEGORIES.splice(i,1);
        return true;
      }
    }
    return false;
  }

  update(categorie: Category){
    for(let i=0; i<CATEGORIES.length;i++){
      if(CATEGORIES[i].id == categorie.id){
        CATEGORIES[i] = categorie;
        return true;
      }
    }
    return false;
  }

  add(categorie: Category){
    categorie.id = CATEGORIES.length+1;
    CATEGORIES.push(categorie);
  }
}
