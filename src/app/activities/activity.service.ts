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

  getActivity(id): Activity{
    for(let i=0; i<ACTIVITIES.length;i++){
      if(ACTIVITIES[i].id == id){
        return ACTIVITIES[i];
      }
    }
  }

  save(activity: Activity){
    if(activity.id){
      this.update(activity);
    } else {
      this.add(activity);
    }
  }

  delete(activity: Activity){
    for(let i=0; i<ACTIVITIES.length;i++){
      if(ACTIVITIES[i].id == activity.id){
        ACTIVITIES.splice(i,1);
        return true;
      }
    }
    return false;
  }

  update(activity: Activity){
    for(let i=0; i<ACTIVITIES.length;i++){
      if(ACTIVITIES[i].id == activity.id){
        ACTIVITIES[i] = activity;
        return true;
      }
    }
    return false;
  }

  add(activity: Activity){
    activity.id = ACTIVITIES.length+1;
    ACTIVITIES.push(activity);
  }

}
