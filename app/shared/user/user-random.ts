export class MyRandom {
  dataFromAPI;
  constructor() {
  }
  getRandom(){

  return new Promise((resolve, reject) => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        this.dataFromAPI = xhttp.responseText;
        resolve(this.dataFromAPI);
      }
    };
    xhttp.open("GET", "https://randomuser.me/api/", true);
    xhttp.send();
  })
  }
}
