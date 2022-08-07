import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Experiencia } from 'src/app/modelo/Experiencia';

@Component({
  selector: 'app-modal-editar-exp',
  templateUrl: './modal-editar-exp.component.html',
  styleUrls: ['./modal-editar-exp.component.css']
})
export class ModalEditarExpComponent implements OnInit {

  @Input() experiencia!: Experiencia;
  @Output() onEditarExperiencia: EventEmitter<Experiencia> = new EventEmitter();

  puesto:string ="";
  empresa:string="";
  ubicacion:string="";
  inicio:string="";
  fin:string="";
  descripcion:string="";
  subscription?: Subscription;

  constructor(
    public modal:NgbModal,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(formDetailUser: NgForm){
    const id = this.experiencia.id;
    const puesto = this.puesto;
    const empresa = this.empresa;
    const ubicacion = this.ubicacion;
    const inicio = this.inicio;
    const fin = this.fin;
    const descripcion = this.descripcion;
    const editado : Experiencia = { id, puesto, empresa, ubicacion, inicio, fin, descripcion };

    this.onEditarExperiencia.emit(editado);
    
    formDetailUser.reset();

    window.location.reload();
  }

}
