import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UiService {

  public mostrarEdicion: boolean = false;

  constructor() { }

  puedeEditar(): boolean{
    if(sessionStorage.getItem('login') !== null){
      this.mostrarEdicion = true;
    }
    console.log("chequeo si esta logueado en el servicio: " + this.mostrarEdicion)
    return this.mostrarEdicion;
  }

  iniciarSesion(): void {
    this.mostrarEdicion = true;
    console.log("Inició sesión. Puede editar: " + this.mostrarEdicion);
  }

  cerrarSesion(): void {
    this.mostrarEdicion = false;
    sessionStorage.removeItem('login');
    console.log("Cerró sesión. Puede editar: " + this.mostrarEdicion);
  }

}
