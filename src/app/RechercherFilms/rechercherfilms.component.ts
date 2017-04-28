import { Component } from '@angular/core';
import {FilmService} from 'app/services/FilmService.service';

@Component({
  selector: 'rechercherfilms',
  templateUrl: './rechercherfilms.component.html',
  styleUrls: ['./rechercherfilms.component.css']
})

export class rechercherfilmsComponent {

/*  public listeFilms: film[] = [
    {Poster:1,Title:"Mars Attack",Year:1996},
    {Poster:2,Title:"La chevauchée",Year:1990},
    {Poster:3,Title:"Les sept mercenaires",Year:1982},
    {Poster:4,Title:"Maman j'ai raté l'avion",Year:2006},
    {Poster:5,Title:"1ere guerre mondiale",Year:1916},
  ]; */

  public listeFilms: Object[];
  public listeShadow: string = "";
  public rechercheString: string = "";
  public filmRecherche: film[] = [];
  public filmDetails: film[];

constructor(private filmService : FilmService){

};



getFilmFromList(arr) {
  for (var i=0, iLen=arr.length; i<iLen; i++) {
    return arr[i];
  }
}

  rechercher(filmService : FilmService) {
    if (this.rechercheString === ""){
      console.log("recherche vide")
    }else{
    this.filmService.getFilm(this.rechercheString)
    .then((liste) => {

      this.listeShadow = "done"

      console.log('recherche effective sur : ', this.rechercheString)

        this.listeFilms = liste;

        this.filmDetails = this.getFilmFromList(this.listeFilms)
        console.log("un film OU PAS:", this.filmDetails);

      }).catch((error) => {
        console.log(error);
      });
    }
  }


/*  rechercher() {
    if (this.rechercheString === ""){
      console.log("recherche vide")
    }else{
      this.listeShadow = "done"
      this.filmRecherche = this.listeFilms.filter(film => film.Title.includes(this.rechercheString));
    }
  } */

}

class film {
  Poster: string;
  Title: string;
  Year: number;
}
