import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoroscopoService {

  constructor(private _http:HttpClient) { }

  horoscopo(sing:string,day:string):Observable<any>{

    const options = {
      method: 'POST',
      params: {sign: sing, day: day},
      headers:new HttpHeaders({
        'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com',
        'X-RapidAPI-Key': '1672ae780fmshc3b404055cc54fep1efeaejsnaa14c0a0c8d6'
      })
    }
    const body = null
    return this._http.post("https://sameer-kumar-aztro-v1.p.rapidapi.com/",body,options)

  }

}
