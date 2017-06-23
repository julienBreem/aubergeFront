import { Injectable } from '@angular/core';
import {Category} from "./category.model";
import {CATEGORIES} from "./mock-categories";

@Injectable()
export class CategoryService {

  constructor() { }

  getCategories(): Category[] {
    return CATEGORIES;
  }
}
