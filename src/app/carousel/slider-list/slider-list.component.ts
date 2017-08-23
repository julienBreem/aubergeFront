import { Component, OnInit } from '@angular/core';
import {Slider} from "../slider.model";
import {SliderService} from "../slider.service";
import {AuthService} from "../../core/auth.service";

@Component({
  selector: 'app-slider-list',
  templateUrl: './slider-list.component.html',
  styleUrls: ['./slider-list.component.css']
})
export class SliderListComponent implements OnInit {


  sliders: Slider[];
  selectedSlider: Slider;

  constructor(
      private sliderService: SliderService,
      private authService: AuthService,

  ) { }


  ngOnInit() {
    this.getSliders();
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

  deleteCategory(category: Slider){
    if(this.admin() && confirm('Êtes vous sûr de vouloir supprimer cette catégories? ( les activités seront aussi supprimées )') ){
      this.selectSlider(null);
      this.sliderService.delete(category);
      this.getSliders();
    }

  }
}
