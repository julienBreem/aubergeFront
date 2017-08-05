import { Component, OnInit } from '@angular/core';
import {Category} from "../category.model";
import {CategoryService} from "../category.service";
import {ActivatedRoute, Params} from "@angular/router";


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category: Category;
  constructor(
      private categoryService: CategoryService,
      private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params
        .subscribe(
            (params:Params) => this.category = this.categoryService.getCategory(params['id'])
        )

  }

}
