import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { last, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  constructor(private _http:HttpClient) { }

  clima(lon:string , lat:string , lang:string):Observable<any>{
    const options = {
      method: 'GET',
      params: { lon: lon ,lat: lat, lang:lang},
      headers: new HttpHeaders( {
        'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com',
        'X-RapidAPI-Key': '1672ae780fmshc3b404055cc54fep1efeaejsnaa14c0a0c8d6'
      })
    }
      const body = null;
      return this._http.get("https://weatherbit-v1-mashape.p.rapidapi.com/current",options)
      }
  
}


  