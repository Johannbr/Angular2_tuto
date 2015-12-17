import {Hero} from 'app/shared/hero/hero';

export class HeroManager{
  public heroes:Hero[];
  constructor(){
    this.init();

  }
  init(){
    // this.heroes = JSON.parse(localStorage.getItem("heroes")) || [];
    this.heroes = [
      { "id": 11, "name": "Mr. Nice" },
      { "id": 12, "name": "Narco" },
      { "id": 13, "name": "Bombasto" },
      { "id": 14, "name": "Celeritas" },
      { "id": 15, "name": "Magneta" },
      { "id": 16, "name": "RubberMan" },
      { "id": 17, "name": "Dynama" },
      { "id": 18, "name": "Dr IQ" },
      { "id": 19, "name": "Magma" },
      { "id": 20, "name": "Tornado" }
    ];
  }
}
