import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Category} from "../category.model";

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css'],
})
export class CategoryDetailComponent {


  @Input()
  values: Category;

  @Output()
  submitCat: EventEmitter<Category> = new EventEmitter<Category>();



  constructor() {
  }



  doSubmit(event){
    this.submitCat.emit(this.values);
    return false;
  }

}
