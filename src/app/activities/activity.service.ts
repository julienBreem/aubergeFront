import { Injectable } from '@angular/core';
import {Activity} from "./activity.model";
import {ACTIVITIES} from "./mock-activities";
@Injectable()
export class ActivityService {

  constructor() { }

  getActivities(): Activity[]{
    return ACTIVITIES;
  }

  getActivitiesByCategoryId(id): Activity[]{
    return ACTIVITIES;
  }

}
