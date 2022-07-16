import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Habilidad } from 'src/app/modelo/Habilidad';

@Component({
  selector: 'app-modal-agregar-hab',
  templateUrl: './modal-agregar-hab.component.html',
  styleUrls: ['./modal-agregar-hab.component.css']
})
export class ModalAgregarHabComponent implements OnInit {

  @Output() onAgregarHabilidad: EventEmitter<Habilidad> = new EventEmitter();

  nombre: string = "";
  porcentaje: number = 0;
  subscription?: Subscription;

  constructor(
    public modal: NgbModal,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(formDetailUser: NgForm){
    const {nombre, porcentaje} = this
    const nuevaHabilidad = {nombre, porcentaje}
    this.onAgregarHabilidad.emit(nuevaHabilidad);
    formDetailUser.reset();
    window.location.reload();
  }

}
