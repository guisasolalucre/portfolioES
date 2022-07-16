import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelo/Persona';
import { PersonaService } from 'src/app/servicios/servicios-modelo/persona.service';
import { UiService } from 'src/app/servicios/ui.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  persona: Persona = new Persona();

  logueado: boolean = true;

  constructor(private datosPortafolio:PersonaService,
              private uiService: UiService) { }

  ngOnInit(): void {
    this.logueado = this.uiService.puedeEditar();
    console.log("encabezado log: " + this.uiService.mostrarEdicion)

    this.datosPortafolio.obtenerDatos().subscribe(data => {
      this.persona = data;
    })
  }
}
 