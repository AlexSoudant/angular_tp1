import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/toPromise'

@Injectable()
export class FilmService{

  constructor(private http: Http) {};

  getFilm(filmSearched): Promise<Object[]> {
    return new Promise((resolve,reject) => {
      //console.log('veux tu marcher saloperie???')
      //console.log(filmSearched)
      this.http.get('http://omdbapi.com/?s=' + filmSearched)
      .toPromise()
      .then((response) => {
        resolve(response.json()["Search"]);
        //console.log(response.json()["Search"])
      });
    });
  };

}
