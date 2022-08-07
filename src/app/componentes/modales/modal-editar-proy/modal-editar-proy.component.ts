import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Proyecto } from 'src/app/modelo/Proyecto';

@Component({
  selector: 'app-modal-editar-proy',
  templateUrl: './modal-editar-proy.component.html',
  styleUrls: ['./modal-editar-proy.component.css']
})
export class ModalEditarProyComponent implements OnInit {

  @Input() proyecto!: Proyecto;
  @Output() onEditarProyecto: EventEmitter<Proyecto> = new EventEmitter();

  nombre:string ="";
  link:string="";
  descripcion:string="";
  inicio:string="";
  fin:string="";
  subscription?: Subscription;

  constructor(
    public modal:NgbModal,
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
    const editado : Proyecto = { id, nombre, link, descripcion, inicio, fin };

    this.onEditarProyecto.emit(editado);
    
    formDetailUser.reset();

    window.location.reload();
  }

}
