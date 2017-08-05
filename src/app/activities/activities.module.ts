import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivitiesComponent} from "./activities.component";
import {ActivityListComponent} from "./activity-list/activity-list.component";
import {ActivityComponent} from "./activity/activity.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      ActivitiesComponent,
      ActivityListComponent,
      ActivityComponent
  ],
  exports: [
    ActivitiesComponent
  ]
})
export class ActivitiesModule { }
