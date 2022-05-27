import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { traduccion } from 'src/app/models/txtAudio';
import { TxtAudioService } from 'src/app/service/txt-audio.service';

@Component({
  selector: 'app-txt-audio',
  templateUrl: './txt-audio.component.html',
  styleUrls: ['./txt-audio.component.css']
})
export class TxtAudioComponent implements OnInit {

  url!:SafeUrl;
  traduc!:traduccion
  constructor(private textService : TxtAudioService ,private sanitizer:DomSanitizer) {
    this.traduc=new traduccion()
   }

  ngOnInit(): void {
  }

  traducir(){
    console.log("nike")
    this.textService.traducir('es-AR-2',this.traduc.texto).subscribe(
      (data:any)=>{
        console.log(data)
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(data.result.audio_url) 
        
      }
    )
  }

}
