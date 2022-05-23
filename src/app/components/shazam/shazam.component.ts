import { Component, OnInit } from '@angular/core';
import { shazams } from 'src/app/models/shazam';
import { ShazamService } from 'src/app/service/shazam.service';

@Component({
  selector: 'app-shazam',
  templateUrl: './shazam.component.html',
  styleUrls: ['./shazam.component.css']
})
export class ShazamComponent implements OnInit {

  cancion!:string;
  Curl!:string
  shazams!:shazams

  constructor(private shazamService : ShazamService) { 

    this.shazams = new shazams()
  }

  ngOnInit(): void {
  }

  buscar(){
    console.log("niceee")
    this.shazamService.shazamear(this.cancion).subscribe(
      (data:any) =>{
        console.log(data)
        this.shazams.Curl = data.tracks.hits[0].track.url
        this.shazams.nombre = data.tracks.hits[0].track.title
        this.shazams.Cimg = data.tracks.hits[0].track.share.image
      }
    )
  }

}
