import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShazamService {

  constructor(private _http:HttpClient) { }

  shazamear(term:string){

    const opcions ={
      method: 'GET',
      params: {term:term},
      headers:new HttpHeaders({
        'X-RapidAPI-Host':'shazam.p.rapidapi.com',
        'X-RapidAPI-Key':'1672ae780fmshc3b404055cc54fep1efeaejsnaa14c0a0c8d6'
      })
    }
    return this._http.get('https://shazam.p.rapidapi.com/search',opcions)
  }

}
