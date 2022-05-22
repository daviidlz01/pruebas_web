import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HoroscopoComponent } from './components/horoscopo/horoscopo.component';
import { GeneradorQRComponent } from './components/generador-qr/generador-qr.component';
import { TxtAudioComponent } from './components/txt-audio/txt-audio.component';
import { ClimaComponent } from './components/clima/clima.component';
import { ShazamComponent } from './components/shazam/shazam.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormularioComponent,
    HoroscopoComponent,
    GeneradorQRComponent,
    TxtAudioComponent,
    ClimaComponent,
    ShazamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
