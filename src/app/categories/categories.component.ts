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
export class CategoriesComponent  {

  constructor(
  ) { }

}
