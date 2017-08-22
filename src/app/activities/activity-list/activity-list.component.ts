import {Component, OnInit} from '@angular/core';
import {Activity} from "../activity.model";
import {AuthService} from "../../core/auth.service";
import {ActivityService} from "../activity.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {
  activities: Activity[];
  selectedActivity: Activity;

  constructor(
      private authService: AuthService,
      private activityService: ActivityService,
      private route: ActivatedRoute,
  ) { }


  ngOnInit() {
    this.getActivities();
  }

  getActivities(){
    this.route.params.subscribe((params: Params) => {
      this.activities = this.activityService.getActivitiesByCategoryId(params['id']);
    });
  }

  public admin():boolean{
    return this.authService.getAdmin();
  }


  selectActivity(activity: Activity){
    if(this.admin()){
      (this.selectedActivity == activity)?this.selectedActivity = null : this.selectedActivity = activity;
    }

  }
  submitForm(activity: Activity) {
    this.activityService.save(activity);
    this.getActivities();
    this.selectActivity(activity);
  }

  deleteActivity(activity: Activity){
    if(this.admin() && confirm('Êtes vous sûr de vouloir supprimer cette catégories? ( les activités seront aussi supprimées )') ){
      this.selectActivity(null);
      this.activityService.delete(activity);
      this.getActivities();
    }

  }

}
