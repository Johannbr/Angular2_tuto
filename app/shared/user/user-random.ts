export class MyRandom {
  dataFromAPI;
  constructor() {
  }
  getRandom(callback){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        this.dataFromAPI = xhttp.responseText;
        callback(this.dataFromAPI);
      }
    };
    xhttp.open("GET", "https://randomuser.me/api/", true);
    xhttp.send();

    // this.http.get('https://randomuser.me/api/')
    //    .map(res => res.text())
    //    .subscribe(
    //      data => this.dataFromAPI = data,
    //      err => console.log(err),
    //      () => console.log('Random Quote Complete')
    //    );
    //    console.log(this.dataFromAPI);
  }
}
