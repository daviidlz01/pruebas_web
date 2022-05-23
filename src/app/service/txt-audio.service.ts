import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TxtAudioService {

  constructor(private _http:HttpClient) { }

  traducir(voiceCode:string,text:string){
    const options ={
      url:'https://cloudlabs-text-to-speech.p.rapidapi.com/synthesize',
      method: 'POST',
      headers:new HttpHeaders({
        'content-type':'application/x-www-form-urlencoded',
        'X-RapidAPI-Host':'cloudlabs-text-to-speech.p.rapidapi.com',
        'X-RapidAPI-Key':'1672ae780fmshc3b404055cc54fep1efeaejsnaa14c0a0c8d6'
      })
    }
    const body = new HttpParams()
    .set('voice_code',voiceCode)
    .set('text',text);
    return this._http.post('https://cloudlabs-text-to-speech.p.rapidapi.com/synthesize',body,options)

    
  }
}
