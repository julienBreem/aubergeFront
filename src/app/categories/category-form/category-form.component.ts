import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Category} from "../category.model";

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css'],
})
export class CategoryFormComponent {
  @Input()
  values: Category;

  @Output()
  submitCat: EventEmitter<Category> = new EventEmitter<Category>();

  @Output()
  close: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  closeForm(){
    this.close.emit();
  }

  doSubmit(event){
    console.log(this.values);
    this.submitCat.emit(this.values);
    return false;
  }

}
