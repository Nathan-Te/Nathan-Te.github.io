import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SpotifyComponent } from './components/spotify/spotify.component';
import { LyricsComponent } from './components/lyrics/lyrics.component';
import { InfosComponent } from './components/infos/infos.component';
import { ConcertComponent } from './components/concert/concert.component';
import { BonjourPseudoComponent } from './components/bonjour-pseudo/bonjour-pseudo.component';

@NgModule({
  declarations: [
    AppComponent,
    SpotifyComponent,
    LyricsComponent,
    InfosComponent,
    ConcertComponent,
    BonjourPseudoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
