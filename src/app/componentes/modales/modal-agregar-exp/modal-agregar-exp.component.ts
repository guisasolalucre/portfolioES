import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Experiencia } from 'src/app/modelo/Experiencia';

@Component({
  selector: 'app-modal-agregar-exp',
  templateUrl: './modal-agregar-exp.component.html',
  styleUrls: ['./modal-agregar-exp.component.css']
})
export class ModalAgregarExpComponent implements OnInit {

  @Output() onAgregarExperiencia: EventEmitter<Experiencia> = new EventEmitter();

  puesto:string ="";
  empresa:string="";
  ubicacion:string="";
  inicio:string="";
  fin:string="";
  descripcion:string="";
  subscription?: Subscription;

  constructor(
    public modal:NgbModal,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(formDetailUser: NgForm){
    const {puesto, empresa, ubicacion, inicio, fin, descripcion} = this
    const nuevaExperiencia = {puesto, empresa, ubicacion, inicio, fin, descripcion}
    this.onAgregarExperiencia.emit(nuevaExperiencia);
    formDetailUser.reset();
    window.location.reload();
  }

}
