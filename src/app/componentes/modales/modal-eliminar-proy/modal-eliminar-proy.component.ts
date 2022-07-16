import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Proyecto } from 'src/app/modelo/Proyecto';
import { ProyectoService } from 'src/app/servicios/servicios-modelo/proyecto.service';

@Component({
  selector: 'app-modal-eliminar-proy',
  templateUrl: './modal-eliminar-proy.component.html',
  styleUrls: ['./modal-eliminar-proy.component.css']
})
export class ModalEliminarProyComponent implements OnInit {

  @Input() proyecto!: Proyecto

  constructor(public modal:NgbModal,
              public proyectoService: ProyectoService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.proyectoService.eliminarProyecto(this.proyecto).subscribe((data)=>(
      console.log("eliminado")
    ));

    window.location.reload();
  }

}
