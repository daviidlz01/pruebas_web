import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { generadorQr } from 'src/app/models/generar-qr';
import { QrGeneradorService } from 'src/app/service/qr-generador.service';

@Component({
  selector: 'app-generador-qr',
  templateUrl: './generador-qr.component.html',
  styleUrls: ['./generador-qr.component.css']
})
export class GeneradorQRComponent implements OnInit {

  generarQr!:generadorQr;
  imgqr!:SafeHtml;
  constructor(private generarQRservice:QrGeneradorService, private satitizer:DomSanitizer) {
    this.generarQr=new generadorQr()
   }

  ngOnInit(): void {
  }

  convertir(){
    console.log("asifunca")
    this.generarQRservice.qr(this.generarQr.myurl).subscribe(
      (data:any) =>{
        console.log(data)
        this.imgqr = this.satitizer.bypassSecurityTrustHtml(data.result); 
      }
    )
  }
}

/*this.qrGenerateService.getQr(url).subscribe( (res) => {
      this.qr = this.sanitizer.bypassSecurityTrustHtml(res.result);
    })
    */