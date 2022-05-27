import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/peliculas';
import { PeliculasService } from 'src/app/service/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  idPeliculas:string []=["560794","631114","794693","298002","189757","800672"/**/];
  peliculas:Pelicula[]=[];

  constructor(private peliculasService : PeliculasService) { }

  ngOnInit(): void {

    this.idPeliculas.forEach(
      (dataid) => {
        this.peliculasService.Cpeliculas('es',dataid).subscribe(
         (data:any)=>{
            const pelis = new Pelicula();
            pelis.descripcion = data.movie.excerpt;
            pelis.titulo = data.movie.title;
            pelis.imagen = data.movie.images;

            this.peliculas.push(pelis);
            console.log(this.peliculas)
          }
        )
      }
    )
  }


  
}
