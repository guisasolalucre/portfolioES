import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Experiencia } from 'src/app/modelo/Experiencia';

@Component({
  selector: 'app-modal-eliminar-exp',
  templateUrl: './modal-eliminar-exp.component.html',
  styleUrls: ['./modal-eliminar-exp.component.css']
})
export class ModalEliminarExpComponent implements OnInit {

  @Input() experiencia!: Experiencia
  @Output() onEliminarExperiencia: EventEmitter<Experiencia> = new EventEmitter();

  constructor(public modal:NgbModal,) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.onEliminarExperiencia.emit(this.experiencia);

    window.location.reload();
  }

}
