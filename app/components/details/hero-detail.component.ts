import {Component} from 'angular2/core';
import {Hero} from '../../shared/hero/hero';
@Component({
  selector: 'my-hero-detail',
  templateUrl:'app/components/details/hero-detail.template.html' ,
  inputs: ['hero']
})
export class HeroDetailComponent {
  public hero: Hero;
  constructor(){

  }
}
