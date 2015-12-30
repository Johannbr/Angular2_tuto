import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';

@Injectable()
export class MyRandom {
  dataFromAPI;
  constructor(public http: Http) {
  }
  getRandom(){
    return new Promise((resolve, reject) => {
    this.http.get('https://randomuser.me/api/').subscribe(res => {
      resolve(res.json());
    });
  })
  }
}
