import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QrGeneradorService {

  constructor(private _http:HttpClient) { }

  qr(text:string):Observable<any>{
    const options = {
	    method: 'GET',
      params:{text:text,foreColor: '#000000', backColor: '#ffffff', pixel: '10'},
	    headers:new HttpHeaders({
        'X-RapidAPI-Host': 'qr-generator-api.p.rapidapi.com',
        'X-RapidAPI-Key': '1672ae780fmshc3b404055cc54fep1efeaejsnaa14c0a0c8d6'
  	})
  }
  

  return this._http.get('https://qr-generator-api.p.rapidapi.com/api/qrcode/generate',options)
  }

}

