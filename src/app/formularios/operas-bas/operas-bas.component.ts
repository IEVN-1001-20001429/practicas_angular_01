import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {
    num1:string='';
    radioButton:string = '';
    resultado:number=0;
    operacion():void{
      if(this.radioButton=="1"){
        this.resultado = (parseFloat(this.num1)-32)/1.8;
      }else if(this.radioButton=="2"){
        this.resultado = (parseFloat(this.num1)*1.8)+32;
      }
    }
}
