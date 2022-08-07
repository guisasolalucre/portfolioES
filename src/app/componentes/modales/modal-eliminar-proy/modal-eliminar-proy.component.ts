import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Proyecto } from 'src/app/modelo/Proyecto';

@Component({
  selector: 'app-modal-eliminar-proy',
  templateUrl: './modal-eliminar-proy.component.html',
  styleUrls: ['./modal-eliminar-proy.component.css']
})
export class ModalEliminarProyComponent implements OnInit {

  @Input() proyecto!: Proyecto
  @Output() onEliminarProyecto: EventEmitter<Proyecto> = new EventEmitter();

  constructor(public modal:NgbModal,) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.onEliminarProyecto.emit(this.proyecto);

    window.location.reload();
  }

}
