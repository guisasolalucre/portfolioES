import { Component, Input, OnInit } from '@angular/core';
import { Educacion } from 'src/app/interfaces/Educacion';
import { Experiencia } from 'src/app/interfaces/Experiencia';
import { Habilidad } from 'src/app/interfaces/Habilidad';
import { Persona } from 'src/app/interfaces/Persona';
import { Proyecto } from 'src/app/interfaces/Proyecto';
import { PersonaService } from 'src/app/servicios/servicios-modelo/persona.service';
import { EducacionService } from 'src/app/servicios/servicios-modelo/educacion.service';
import { ExperienciaService } from 'src/app/servicios/servicios-modelo/experiencia.service';
import { HabilidadService } from 'src/app/servicios/servicios-modelo/habilidad.service';
import { ProyectoService } from 'src/app/servicios/servicios-modelo/proyecto.service';
import { UiService } from 'src/app/servicios/ui.service';

@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.component.html',
  styleUrls: ['./secciones.component.css']
})

export class SeccionesComponent implements OnInit {

  // para que empiece mostrando acerca de
  id:String = "acercade";

  persona!: Persona;
  logueado: boolean = true;

  listaEducacion: Educacion[] = [];
  listaExperiencia: Experiencia[] = [];
  listaHabilidades: Habilidad[] = [];
  listaProyectos: Proyecto[] = [];

  constructor(private datosPortafolio:PersonaService,
              private educacionService: EducacionService,
              private experienciaService: ExperienciaService,
              private habilidadService: HabilidadService,
              private proyectoService: ProyectoService,
              private uiService : UiService) { }

  ngOnInit(): void {
    this.logueado = this.uiService.estadoBoolean();

    this.datosPortafolio.obtenerDatos().subscribe(data => {
      this.persona = data;
    });
    this.educacionService.obtenerEducacion().subscribe(data => {
      this.listaEducacion = data;
    });
    this.experienciaService.obtenerExperiencia().subscribe(data => {
      this.listaExperiencia = data;
    });
    this.habilidadService.obtenerHabilidades().subscribe(data => {
      this.listaHabilidades = data;
    });
    this.proyectoService.obtenerProyectos().subscribe(data => {
      this.listaProyectos = data;
    }); 
  }

  // pestañas
  cambio(ids:String){
    this.id = ids;
  }

  // educacion
  agregarEducacion(edu: Educacion){
    this.educacionService.agregarEducacion(edu).subscribe((data)=>(
      this.listaEducacion.push(data)
    ));
  }

  editarEducacion(edu: Educacion){
    this.educacionService.editarEducacion(edu).subscribe((data)=>(
      this.listaEducacion.push(data)
    ));
  }

  eliminarEducacion(edu: Educacion){
    this.educacionService.eliminarEducacion(edu).subscribe(()=>(
        this.listaEducacion = this.listaEducacion.filter( t => t.id !== edu.id)
    ));
  }

  // experiencia
  agregarExperiencia(exp: Experiencia){
    this.experienciaService.agregarExperiencia(exp).subscribe((data)=>(
      this.listaExperiencia.push(data)
    ));
  }

  editarExperiencia(exp: Experiencia){
    this.experienciaService.editarExperiencia(exp).subscribe((data)=>(
      this.listaExperiencia.push(data)
    ));
  }

  eliminarExperiencia(exp: Experiencia){
    this.experienciaService.eliminarExperiencia(exp).subscribe((data)=>(
      console.log("edu eliminada")
    ))
  }

  // habilidad
  agregarHabilidad(hab: Habilidad){
    this.habilidadService.agregarHabilidad(hab).subscribe((data)=>(
      this.listaHabilidades.push(data)
    ));
  }

  editarHabilidad(hab: Habilidad){
    this.habilidadService.editarHabilidad(hab).subscribe((data)=>(
      this.listaHabilidades.push(data)
    ));
  }

  eliminarHabilidad(hab: Habilidad){
    this.habilidadService.eliminarHabilidad(hab).subscribe((data)=>(
      console.log("edu eliminada")
    ))
  }

  // proyecto
  agregarProyecto(proy: Proyecto){
    this.proyectoService.agregarProyecto(proy).subscribe((data)=>(
      this.listaProyectos.push(data)
    ));
  }

  editarProyecto(proy: Proyecto){
    this.proyectoService.editarProyecto(proy).subscribe((data)=>(
      this.listaProyectos.push(data)
    ));
  }

  eliminarProyecto(proy: Proyecto){
    this.proyectoService.eliminarProyecto(proy).subscribe((data)=>(
      console.log("edu eliminada")
    ))
  }

}
