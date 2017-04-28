import { Component, OnInit, Input } from '@angular/core';
import {MeteoService} from 'app/services/MeteoService.service';

@Component({
  selector: 'barreheader',
  templateUrl: './barreheader.component.html',
  styleUrls: ['./barreheader.component.css'],
})
export class BarreHeaderComponent implements OnInit {
  //@Input()
  public message: Object[];
  public forecastWeek: Object[];
  public dateForecast: number = 0;

  constructor( meteoService : MeteoService){
    meteoService.getMeteoLocation()
    .then((forecast) => {
      this.forecastWeek = forecast;
      this.message = forecast[0]["text"];
      //this.dateForecast = forecast[0]["date"]
      console.log(forecast);
    })
  };

  changerJourMeteoAvant(meteoService : MeteoService){
    console.log("changerJourMeteoAvant")
    if(this.dateForecast === 0){
      this.message = this.forecastWeek[0]["text"]
    }
    if(this.dateForecast === 1){
      this.message = this.forecastWeek[0]["text"]
      this.dateForecast = 0
    }
    if(this.dateForecast === 2){
      this.message = this.forecastWeek[1]["text"]
      this.dateForecast = 1
    }
    if(this.dateForecast === 3){
      this.message = this.forecastWeek[2]["text"]
      this.dateForecast = 2
    }
  }

  changerJourMeteoApres(meteoService : MeteoService){
    if(this.dateForecast === 0){
      this.message = this.forecastWeek[1]["text"]
      this.dateForecast = 1
    }
    if(this.dateForecast === 1){
      this.message = this.forecastWeek[2]["text"]
      this.dateForecast = 2
    }
    if(this.dateForecast === 2){
      this.message = this.forecastWeek[3]["text"]
      this.dateForecast = 3
    }
  }



  ngOnInit() {
  }

}
