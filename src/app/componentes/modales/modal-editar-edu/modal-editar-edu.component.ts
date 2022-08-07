import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Educacion } from 'src/app/modelo/Educacion';

@Component({
  selector: 'app-modal-editar-edu',
  templateUrl: './modal-editar-edu.component.html',
  styleUrls: ['./modal-editar-edu.component.css']
})
export class ModalEditarEduComponent implements OnInit {

  @Input() educacion!: Educacion;
  @Output() onEditarEducacion: EventEmitter<Educacion> = new EventEmitter();

  carrera:string ="";
  institucion:string="";
  ubicacion:string="";
  inicio:string="";
  fin:string="";
  subscription?: Subscription;

  constructor(
    public modal:NgbModal,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(formDetailUser: NgForm){
    const id = this.educacion.id;
    const carrera = this.carrera;
    const institucion = this.institucion;
    const ubicacion = this.ubicacion;
    const inicio = this.inicio;
    const fin = this.fin;
    const editado : Educacion = { id, carrera, institucion, ubicacion, inicio, fin };

    this.onEditarEducacion.emit(editado);
    
    formDetailUser.reset();

    window.location.reload();
  }

}
