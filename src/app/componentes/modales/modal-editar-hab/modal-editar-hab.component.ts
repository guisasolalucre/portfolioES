import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Habilidad } from 'src/app/modelo/Habilidad';

@Component({
  selector: 'app-modal-editar-hab',
  templateUrl: './modal-editar-hab.component.html',
  styleUrls: ['./modal-editar-hab.component.css']
})
export class ModalEditarHabComponent implements OnInit {

  @Input() habilidad!: Habilidad;
  @Output() onEditarHabilidad: EventEmitter<Habilidad> = new EventEmitter();

  nombre:string ="";
  porcentaje:number=0;
  subscription?: Subscription;

  constructor(
    public modal:NgbModal,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(formDetailUser: NgForm){
    const id = this.habilidad.id;
    const nombre = this.nombre;
    const porcentaje = this.porcentaje;
    const editado : Habilidad = { id, nombre, porcentaje };

    this.onEditarHabilidad.emit(editado);
    
    formDetailUser.reset();

    window.location.reload();
  }

}
