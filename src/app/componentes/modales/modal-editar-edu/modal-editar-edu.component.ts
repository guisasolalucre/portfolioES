import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Educacion } from 'src/app/interfaces/Educacion';
import { EducacionService } from 'src/app/servicios/servicios-modelo/educacion.service';

@Component({
  selector: 'app-modal-editar-edu',
  templateUrl: './modal-editar-edu.component.html',
  styleUrls: ['./modal-editar-edu.component.css']
})
export class ModalEditarEduComponent implements OnInit {

  @Input() educacion!: Educacion;
  listaEducacion: Educacion[] = [];

  carrera:string ="";
  institucion:string="";
  ubicacion:string="";
  inicio:string="";
  fin:string="";
  subscription?: Subscription;

  constructor(
    public modal:NgbModal,
    private educacionService: EducacionService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(formDetailUser: NgForm){
    const id = this.educacion.id;
    const carrera = this.carrera;
    const institucion = this.institucion;
    const ubicacion = this.ubicacion;
    const inicio = this.inicio;
    const fin = this.fin;
    const editado = { id, carrera, institucion, ubicacion, inicio, fin };

    this.educacionService.editarEducacion(editado).subscribe((data)=>(
      console.log(data)
    ));
    
    formDetailUser.reset();
  }

}
