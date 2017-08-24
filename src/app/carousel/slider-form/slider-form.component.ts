import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Slider} from "../slider.model";

@Component({
  selector: 'app-slider-form',
  templateUrl: './slider-form.component.html',
  styleUrls: ['./slider-form.component.css']
})
export class SliderFormComponent {
  @Input()
  values: Slider;

  @Output()
  submitSlide: EventEmitter<Slider> = new EventEmitter<Slider>();

  @Output()
  close: EventEmitter<any> = new EventEmitter();

  constructor() { }


  closeForm(){
    this.close.emit();
  }

  doSubmit(event){
    console.log(this.values);
    this.submitSlide.emit(this.values);
    return false;
  }
}
