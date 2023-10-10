import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
  nombre:string = '';
  cantidadComp:number = 0;
  ifTarjeta:number = 0;
  numBoletos:number = 0;

  valorPagar:number = 0;
  valorString:string = '';

  procesarCompra(){
    let totalBoletos = this.cantidadComp*7;
    if(this.numBoletos<=totalBoletos){
      if(this.numBoletos>5){
        this.valorPagar = (this.numBoletos * 12 * 0.85);
      }else if(this.numBoletos >= 3 && this.numBoletos <= 5){
        this.valorPagar = (this.numBoletos * 12 * 0.90);
      }else if(this.numBoletos<3){
        this.valorPagar = (this.numBoletos * 12);
      }
      if(this.ifTarjeta == 1){
        this.valorPagar = this.valorPagar * 0.90;
      }
    }else if(this.numBoletos>totalBoletos){
      alert("El limite de boletos comprados por persona es de 7, se excedieron, favor de cambiar la cantidad");
    }
  }

  recargar(){
    location.reload();
  }
}
