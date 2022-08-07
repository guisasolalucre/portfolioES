import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Habilidad } from 'src/app/modelo/Habilidad';

@Component({
  selector: 'app-modal-eliminar-hab',
  templateUrl: './modal-eliminar-hab.component.html',
  styleUrls: ['./modal-eliminar-hab.component.css']
})
export class ModalEliminarHabComponent implements OnInit {

  @Input() habilidad!: Habilidad
  @Output() onEliminarHabilidad: EventEmitter<Habilidad> = new EventEmitter();

  constructor(public modal:NgbModal,) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.onEliminarHabilidad.emit(this.habilidad);

    window.location.reload();
  }

}
