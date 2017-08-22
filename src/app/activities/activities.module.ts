import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivitiesComponent} from "./activities.component";
import {ActivityListComponent} from "./activity-list/activity-list.component";
import {ActivityComponent} from "./activity/activity.component";
import {ActivityService} from "./activity.service";
import { ActivityFormComponent } from './activity-form/activity-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      ActivitiesComponent,
      ActivityListComponent,
      ActivityComponent,
      ActivityFormComponent
  ],
  exports: [
    ActivitiesComponent
  ],
  providers: [ActivityService]
})
export class ActivitiesModule { }
