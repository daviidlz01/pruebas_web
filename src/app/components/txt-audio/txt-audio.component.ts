import { Component, OnInit } from '@angular/core';
import { traduccion } from 'src/app/models/txtAudio';
import { TxtAudioService } from 'src/app/service/txt-audio.service';

@Component({
  selector: 'app-txt-audio',
  templateUrl: './txt-audio.component.html',
  styleUrls: ['./txt-audio.component.css']
})
export class TxtAudioComponent implements OnInit {

  traduc!:traduccion
  constructor(private textService : TxtAudioService) {
    this.traduc=new traduccion()
   }

  ngOnInit(): void {
  }

  traducir(){
    console.log("nike")
    this.textService.traducir('es-AR-2',this.traduc.texto).subscribe(
      (data:any)=>{
        console.log(data)
        this.traduc.Turl = data.result.audio_url
      }
    )
  }

}
