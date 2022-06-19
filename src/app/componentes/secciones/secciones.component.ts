import { Component, OnInit } from '@angular/core';
import { PortafolioService } from 'src/app/servicios/portafolio.service';

@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.component.html',
  styleUrls: ['./secciones.component.css']
})

export class SeccionesComponent implements OnInit {

  id:String = "acercade";
  persona: any;
  listaExperiencia: any;
  listaEducacion: any;
  listaHabilidades: any;
  listaProyectos: any;

  constructor(private datosPortafolio:PortafolioService) { }

  ngOnInit(): void {
    this.datosPortafolio.obtenerDatos().subscribe(data => {
      this.persona = data;
    });
    this.datosPortafolio.obtenerEducacion().subscribe(data => {
      this.listaEducacion = data;
    });
    this.datosPortafolio.obtenerExperiencia().subscribe(data => {
      this.listaExperiencia = data;
    });
    this.datosPortafolio.obtenerHabilidades().subscribe(data => {
      this.listaHabilidades = data;
    });
    this.datosPortafolio.obtenerProyectos().subscribe(data => {
      this.listaProyectos = data;
    });
  }

  cambio(ids:String){
    this.id = ids;
  }

}
