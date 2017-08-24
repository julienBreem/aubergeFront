import { Component, OnInit, OnDestroy } from '@angular/core';
import {Slider} from "../slider.model";
import {SliderService} from "../slider.service";
import {AuthService} from "../../core/auth.service";
import { Observable, Subscription } from 'rxjs/Rx';



@Component({
  selector: 'app-slider-list',
  templateUrl: './slider-list.component.html',
  styleUrls: ['./slider-list.component.css']
})
export class SliderListComponent implements OnInit, OnDestroy {

  timer;
  sub: Subscription;
  active = 0;
  sliders: Slider[];
  selectedSlider: Slider;

  constructor(
      private sliderService: SliderService,
      private authService: AuthService,

  ) { }


  ngOnInit() {
    this.getSliders();
    this.timer = Observable.timer(7000,7000);
    this.sub = this.timer.subscribe(t => {
      if(!this.admin()){
        this.forWard();
      }
    });
  }

  ngOnDestroy(){
      this.sub.unsubscribe();

  }
  gotoSlide(i){
    if(this.sliders[i]){
      this.active = i;
    }
  }

  backWard(){
    if(this.active == 0){
      this.active = this.sliders.length - 1;
    } else {
      --this.active;
    }
  }
  forWard(){
    ++this.active;
    if(!this.sliders[this.active]){
      this.active = 0;
    }
  }

  public admin():boolean{
    return this.authService.getAdmin();
  }

  new(){
    this.selectSlider(new Slider())
  }


  getSliders(): void {
    this.sliders = this.sliderService.getSliders();
  }
  selectSlider(slider: Slider){
    if(this.admin()){
      (this.selectedSlider == slider)?this.selectedSlider = null : this.selectedSlider = slider;
    }

  }
  submitForm(slider: Slider) {
    this.sliderService.save(slider);
    this.getSliders();
    this.selectSlider(slider);
  }

  deleteSlider(slider: Slider){
    console.log(slider);
    if(this.admin() && confirm('Êtes vous sûr de vouloir supprimer ce slider?') ){
      this.selectSlider(null);
      this.sliderService.delete(slider);
      this.getSliders();
    }

  }
}
