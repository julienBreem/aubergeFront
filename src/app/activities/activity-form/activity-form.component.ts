import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Activity} from "../activity.model";

@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.css']
})
export class ActivityFormComponent  {


  @Input()
  values: Activity;

  @Output()
  submitCat: EventEmitter<Activity> = new EventEmitter<Activity>();

  @Output()
  close: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  closeForm(){
    this.close.emit();
  }

  doSubmit(event){
    this.submitCat.emit(this.values);
    return false;
  }

}
