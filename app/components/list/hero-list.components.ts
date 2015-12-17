import {Component} from 'angular2/core';
import {HeroDetailComponent} from 'app/components/details/hero-detail.component';
import {Hero} from 'app/shared/hero/hero';
import {HeroManager} from 'app/shared/hero/hero-manager';
// import {HeroAutreDetailComponent} from '../autre_detail/hero-autre-detail.component';
@Component({
  selector: 'hero-list',
  templateUrl:"app/components/list/hero-list.template.html",
  directives: [HeroDetailComponent]
})
export class ListComponent {
  public selectedHero: Hero;
  public heroes:Hero[];
  onSelect(hero: Hero) { this.selectedHero = hero; }
  constructor(hm: HeroManager){
    // this.hm=new HeroManager();
    this.heroes = hm.heroes;
  }
}
