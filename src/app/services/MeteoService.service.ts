import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class MeteoService{

  constructor(private http: Http) {};

  getMeteoLocation(): Promise<Object[]> {
    return new Promise((resolve,reject) => {
        this.http.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nantes%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys')
        .toPromise()
        .then((response) => {
          resolve(response.json()["query"]["results"]["channel"]["item"]["forecast"])
          console.log(response)
        })
    });
  };

}
