import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Educacion } from 'src/app/modelo/Educacion';

@Component({
  selector: 'app-modal-eliminar-edu',
  templateUrl: './modal-eliminar-edu.component.html',
  styleUrls: ['./modal-eliminar-edu.component.css']
})
export class ModalEliminarEduComponent implements OnInit {

  @Input() educacion!: Educacion;
  @Output() onEliminarEducacion: EventEmitter<Educacion> = new EventEmitter();

  constructor(
    public modal:NgbModal,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.onEliminarEducacion.emit(this.educacion);

    window.location.reload();
  }

}
