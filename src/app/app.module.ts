import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {rechercherfilmsComponent} from './RechercherFilms/rechercherfilms.component';
import {FilmService} from './services/FilmService.service';
import {BarreHeaderComponent} from './BarreHeader/barreheader.component';
import {MeteoService} from './services/MeteoService.service';

@NgModule({
  declarations: [
    AppComponent,
    rechercherfilmsComponent,
    BarreHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FilmService,MeteoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
