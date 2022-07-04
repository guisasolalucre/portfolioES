import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Educacion } from 'src/app/interfaces/Educacion';
import { EducacionService } from 'src/app/servicios/servicios-modelo/educacion.service';

@Component({
  selector: 'app-modal-eliminar-edu',
  templateUrl: './modal-eliminar-edu.component.html',
  styleUrls: ['./modal-eliminar-edu.component.css']
})
export class ModalEliminarEduComponent implements OnInit {

  @Input() educacion!: Educacion;

  constructor(
    public modal:NgbModal,
    public educacionService: EducacionService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.educacionService.eliminarEducacion(this.educacion).subscribe((data)=>(
      console.log("eliminado")
    ));
  }

}
