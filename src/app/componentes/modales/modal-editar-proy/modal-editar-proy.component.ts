import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Proyecto } from 'src/app/interfaces/Proyecto';
import { ProyectoService } from 'src/app/servicios/servicios-modelo/proyecto.service';

@Component({
  selector: 'app-modal-editar-proy',
  templateUrl: './modal-editar-proy.component.html',
  styleUrls: ['./modal-editar-proy.component.css']
})
export class ModalEditarProyComponent implements OnInit {

  @Input() proyecto!: Proyecto;
  listaProyectos: Proyecto[] = [];

  nombre:string ="";
  link:string="";
  descripcion:string="";
  inicio:string="";
  fin:string="";
  subscription?: Subscription;

  constructor(
    public modal:NgbModal,
    private proyectoService: ProyectoService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(formDetailUser: NgForm){
    const id = this.proyecto.id;
    const nombre = this.nombre;
    const link = this.link;
    const descripcion = this.descripcion;
    const inicio = this.inicio;
    const fin = this.fin;
    const editado = { id, nombre, link, descripcion, inicio, fin };

    this.proyectoService.editarProyecto(editado).subscribe((data)=>(
      console.log(data)
    ));
    
    formDetailUser.reset();
  }

}
