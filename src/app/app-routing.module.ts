import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClimaComponent } from './components/clima/clima.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { GeneradorQRComponent } from './components/generador-qr/generador-qr.component';
import { HoroscopoComponent } from './components/horoscopo/horoscopo.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { ShazamComponent } from './components/shazam/shazam.component';
import { TxtAudioComponent } from './components/txt-audio/txt-audio.component';

const routes: Routes = [
//{path: 'page1', component:Page1Component},
{path: 'formulario', component:FormularioComponent},
{path: 'horoscopo', component:HoroscopoComponent},
{path: 'generador-qr', component:GeneradorQRComponent},
{path: 'clima', component:ClimaComponent},
{path: 'shazam', component:ShazamComponent},
{path: 'txt-audio', component:TxtAudioComponent},
{path: 'peliculas' , component:PeliculasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
