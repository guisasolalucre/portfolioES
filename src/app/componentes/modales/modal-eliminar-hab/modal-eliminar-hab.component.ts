import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Habilidad } from 'src/app/modelo/Habilidad';
import { HabilidadService } from 'src/app/servicios/servicios-modelo/habilidad.service';

@Component({
  selector: 'app-modal-eliminar-hab',
  templateUrl: './modal-eliminar-hab.component.html',
  styleUrls: ['./modal-eliminar-hab.component.css']
})
export class ModalEliminarHabComponent implements OnInit {

  @Input() habilidad!: Habilidad

  constructor(public modal:NgbModal,
              public habilidadService: HabilidadService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.habilidadService.eliminarHabilidad(this.habilidad).subscribe((data)=>(
      console.log("eliminado")
    ));

    window.location.reload();
  }

}
