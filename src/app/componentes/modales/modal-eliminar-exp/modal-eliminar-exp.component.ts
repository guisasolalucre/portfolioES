import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Experiencia } from 'src/app/modelo/Experiencia';
import { ExperienciaService } from 'src/app/servicios/servicios-modelo/experiencia.service';

@Component({
  selector: 'app-modal-eliminar-exp',
  templateUrl: './modal-eliminar-exp.component.html',
  styleUrls: ['./modal-eliminar-exp.component.css']
})
export class ModalEliminarExpComponent implements OnInit {

  @Input() experiencia!: Experiencia

  constructor(public modal:NgbModal,
              public experienciaService: ExperienciaService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.experienciaService.eliminarExperiencia(this.experiencia).subscribe((data)=>(
      console.log("eliminado")
    ));

    window.location.reload();
  }

}
