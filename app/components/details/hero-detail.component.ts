import {Component} from 'angular2/core';
import {Hero} from '../../shared/hero/hero';
// import {HeroAutreDetailComponent} from '../autre_detail/hero-autre-detail.component';
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
