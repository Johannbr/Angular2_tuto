import {Component} from 'angular2/core';
import {Hero} from '../../shared/hero/hero';
@Component({
  selector: 'my-other-hero-detail',
  templateUrl:'app/components/autre_detail/hero-autre-detail.template.html' ,
  inputs: ['hero']
})
export class HeroAutreDetailComponent {
  public hero: Hero;
  constructor(){

  }
}
