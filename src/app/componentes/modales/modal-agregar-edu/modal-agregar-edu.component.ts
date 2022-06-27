import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Educacion } from 'src/app/interfaces/Educacion';

@Component({
  selector: 'app-modal-agregar-edu',
  templateUrl: './modal-agregar-edu.component.html',
  styleUrls: ['./modal-agregar-edu.component.css']
})
export class ModalAgregarEduComponent implements OnInit {

  @Output() onAgregarEducacion: EventEmitter<Educacion> = new EventEmitter();

  carrera:string ="";
  institucion:string="";
  ubicacion:string="";
  inicio:string="";
  fin:string="";
  subscription?: Subscription;

  constructor(
    public modal:NgbModal
  ) { }

  ngOnInit(): void {
  }

  onSubmit(formDetailUser: NgForm){
    const {carrera, institucion, ubicacion, inicio, fin} = this
    const nuevaEducacion = {carrera, institucion, ubicacion, inicio, fin}
    this.onAgregarEducacion.emit(nuevaEducacion);
    formDetailUser.reset();
  }

}
