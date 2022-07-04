import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private mostrarEdicion: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleEdit():void{
    this.mostrarEdicion = !this.mostrarEdicion;
    this.subject.next(this.mostrarEdicion);
    console.log("El servicio dice que esto es " + this.mostrarEdicion);
  }

  estadoBoolean():boolean{
    return this.mostrarEdicion;
  }

}
