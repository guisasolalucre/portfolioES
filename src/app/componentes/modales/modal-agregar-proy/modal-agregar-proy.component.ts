import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Proyecto } from 'src/app/modelo/Proyecto';

@Component({
  selector: 'app-modal-agregar-proy',
  templateUrl: './modal-agregar-proy.component.html',
  styleUrls: ['./modal-agregar-proy.component.css']
})
export class ModalAgregarProyComponent implements OnInit {

  @Output() onAgregarProyecto: EventEmitter<Proyecto> = new EventEmitter();

  nombre:string ="";
  link:string="";
  descripcion:string="";
  inicio:string="";
  fin:string="";
  subscription?: Subscription;

  constructor(
    public modal:NgbModal,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(formDetailUser: NgForm){
    const {nombre, link, descripcion, inicio, fin} = this
    const nuevoProyecto = {nombre, link, descripcion, inicio, fin}
    this.onAgregarProyecto.emit(nuevoProyecto);
    formDetailUser.reset();
    window.location.reload();
  }

}
