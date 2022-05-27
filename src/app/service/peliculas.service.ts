import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private _http:HttpClient) { }

  Cpeliculas( lang:string,id:string){
    const options = {
      method: 'GET',
      url: 'https://filmaffinity-unofficial.p.rapidapi.com/movie/detail/',
      params: {lang: lang, id: id},
      headers:new HttpHeaders ({
        'X-RapidAPI-Host': 'filmaffinity-unofficial.p.rapidapi.com',
        //'X-RapidAPI-Key': '1672ae780fmshc3b404055cc54fep1efeaejsnaa14c0a0c8d6',
        
        'X-RapidAPI-Key': '90cd3ea37bmsh80d2438699c0e86p12fcffjsn21a41d450609',
      })
    }
    return this._http.get('https://filmaffinity-unofficial.p.rapidapi.com/movie/detail/',options)
  }
}
