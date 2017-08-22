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
    this.route.params.subscribe((params: Params) => {
      this.activities = this.activityService.getActivitiesByCategoryId(params['id']);
    });
  }


  public admin():boolean{
    return this.authService.getAdmin();
  }



}
