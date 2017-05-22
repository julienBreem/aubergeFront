import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { ActivitiesComponent } from './activities/activities.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, CategoriesComponent, ActivitiesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
