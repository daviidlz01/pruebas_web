import { Component, OnInit } from '@angular/core';
import { generadorQr } from 'src/app/models/generar-qr';
import { QrGeneradorService } from 'src/app/service/qr-generador.service';

@Component({
  selector: 'app-generador-qr',
  templateUrl: './generador-qr.component.html',
  styleUrls: ['./generador-qr.component.css']
})
export class GeneradorQRComponent implements OnInit {

  generarQr!:generadorQr;
  imgqr!:string
  constructor(private generarQRservice:QrGeneradorService) {
    this.generarQr=new generadorQr()
   }

  ngOnInit(): void {
  }

  convertir(){
    console.log("asifunca")
    this.generarQRservice.qr(this.generarQr.myurl).subscribe(
      (data:any) =>{
        console.log(data)
        this.imgqr = data.result
      }
    )
  }
}
