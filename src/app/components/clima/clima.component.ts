import { Component, OnInit } from '@angular/core';
import { Clima } from 'src/app/models/clima';
import { ClimaService } from 'src/app/service/clima.service';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent implements OnInit {

  descc!:string

  clima!:Clima;

  constructor(private climaService : ClimaService) {
    this.clima = new Clima()
   }



  ngOnInit(): void {
  }
  Cclima(){
    console.log("funcanice")
    this.climaService.clima(this.clima.longitud,this.clima.latitud,"es").subscribe(
      (data:any) => {
        console.log(data)
        this.clima.Wdesc = data.data[0].weather.description
        this.clima.temperatura = data.data[0].temp
        this.clima.fecha = data.data[0].ob_time
        this.clima.ciudad = data.data[0].city_name
        
      }
      
    )
  }

}
