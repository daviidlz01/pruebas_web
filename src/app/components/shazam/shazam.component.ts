import { Component, OnInit } from '@angular/core';
import { Cancion } from 'src/app/models/shazam';
import { ShazamService } from 'src/app/service/shazam.service';

@Component({
  selector: 'app-shazam',
  templateUrl: './shazam.component.html',
  styleUrls: ['./shazam.component.css']
})
export class ShazamComponent implements OnInit {
  nombre!:string
  Curl!:string
  cancion!:Cancion
  weas!: Array<any>

  canciones!:Array<Cancion>

  constructor(private shazamService : ShazamService) { 

    this.weas = new Array<any>()
    this.canciones = new Array<Cancion>()
  }

  ngOnInit(): void {
  }

  buscar(){
    console.log("niceee")
    this.shazamService.shazamear(this.nombre).subscribe(
      (data:any) =>{

        console.log(data.data[0].id)
         this.agregarCanciones(data.data)
        console.log(this.canciones)
          
       /* this.shazams.Curl = data.tracks.hits[0].track.url
        this.shazams.nombre = data.data[0].title
        this.shazams.Cimg = data.tracks.hits[0].track.share.image*/
      }
    )
  }
  agregarCanciones(canciones:Array<any>){
    
    for (let i=0;i<=canciones.length;i++){
          this.cancion = new Cancion()
    
          this.cancion.nombre = canciones[i].title
          this.cancion.Curl = canciones[i].preview
          this.cancion.Cimg = canciones[i].album.cover_small
          this.canciones.push(this.cancion)
    
        } 
  }

}
