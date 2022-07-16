import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/modelo/Persona';
import { PersonaService } from 'src/app/servicios/servicios-modelo/persona.service';
import { UiService } from 'src/app/servicios/ui.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  persona: Persona = new Persona();

  logueado: boolean = false;

  @Input() ventana: string = "login";

  constructor(private datosPortafolio:PersonaService,
              private uiService: UiService,
  ) { }

  ngOnInit(): void {

    this.logueado = this.uiService.puedeEditar();
    console.log("navbar log: " + this.logueado)

    this.datosPortafolio.obtenerDatos().subscribe(data => {
      this.persona = data;
    });

    console.log(this.ventana)
  }

  cerrarSesion(){
    this.uiService.cerrarSesion();
    this.logueado = this.uiService.puedeEditar();
    console.log("Se puede editar: " + this.logueado);

    sessionStorage.removeItem('login')

    window.location.reload();
  }

}
