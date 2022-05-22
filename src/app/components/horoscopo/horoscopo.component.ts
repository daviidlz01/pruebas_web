import { Component, OnInit } from '@angular/core';
import { Horoscopo } from 'src/app/models/horoscopo';
import { HoroscopoService } from 'src/app/service/horoscopo.service';

@Component({
  selector: 'app-horoscopo',
  templateUrl: './horoscopo.component.html',
  styleUrls: ['./horoscopo.component.css']
})
export class HoroscopoComponent implements OnInit {

  horoscopo!:Horoscopo
  constructor(private horoscopoService:HoroscopoService) {
    this.horoscopo = new Horoscopo()
   }

  ngOnInit(): void {
  }
  consultar(){        
    console.log("funcamal")
    this.horoscopoService.horoscopo("Aries","today").subscribe(
      (dato:any)=>{
        console.log(dato)
        this.horoscopo.desc = dato.description
        this.horoscopo.color = dato.color
        this.horoscopo.fecha = dato.current_date
        this.horoscopo.Isigno = dato.date_range
      }
    )

  }
}
