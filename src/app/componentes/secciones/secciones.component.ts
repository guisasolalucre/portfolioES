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
  listaSkills: any;
  listaProyectos: any;

  constructor(private datosPortafolio:PortafolioService) { }

  ngOnInit(): void {
    this.datosPortafolio.obtenerDatos().subscribe(data => {
      this.persona = data.persona;
      this.listaExperiencia = data.experiencia;
      this.listaEducacion = data.educacion;
      this.listaSkills = data.skills;
      this.listaProyectos = data.proyectos;
    });
  }

  cambio(ids:String){
    this.id = ids;
  }

}
