import { Injectable } from '@angular/core';
import {Slider} from "./slider.model";
import {SLIDERS} from "./mock-sliders";

@Injectable()
export class SliderService {

  constructor() { }

  getSliders(): Slider[] {
    return SLIDERS;
  }

  getSlider(id): Slider{
    for(let i=0; i<SLIDERS.length;i++){
      if(SLIDERS[i].id == id){
        return SLIDERS[i];
      }
    }
  }

  save(slider: Slider){
    if(slider.id){
      this.update(slider);
    } else {
      this.add(slider);
    }
  }

  delete(slider: Slider){
    for(let i=0; i<SLIDERS.length;i++){
      if(SLIDERS[i].id == slider.id){
        SLIDERS.splice(i,1);
        return true;
      }
    }
    return false;
  }

  update(slider: Slider){
    for(let i=0; i<SLIDERS.length;i++){
      if(SLIDERS[i].id == slider.id){
        SLIDERS[i] = slider;
        return true;
      }
    }
    return false;
  }

  add(slider: Slider){
    slider.id = SLIDERS.length+1;
    SLIDERS.push(slider);
  }
}
