import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicacionaxb',
  templateUrl: './multiplicacionaxb.component.html',
  styleUrls: ['./multiplicacionaxb.component.css']
})
export class MultiplicacionaxbComponent {
  numBase:number = 0;
  numProducto:number = 0;
  res:string = "";

  multiplicar(){
    let numProducto = this.numProducto;
    for (let i = 0; i < numProducto; i++) {
      if(i==0){
        this.res += this.numBase;
      }
      else if(i>=1){
        this.res += " + "+this.numBase;
      }
      
    }
    this.res += " = "+ this.numBase*this.numProducto;
  }
}
