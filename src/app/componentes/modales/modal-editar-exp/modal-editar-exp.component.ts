import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Experiencia } from 'src/app/interfaces/Experiencia';
import { ExperienciaService } from 'src/app/servicios/servicios-modelo/experiencia.service';

@Component({
  selector: 'app-modal-editar-exp',
  templateUrl: './modal-editar-exp.component.html',
  styleUrls: ['./modal-editar-exp.component.css']
})
export class ModalEditarExpComponent implements OnInit {

  @Input() experiencia!: Experiencia;
  listaExperiencia: Experiencia[] = [];

  puesto:string ="";
  empresa:string="";
  ubicacion:string="";
  inicio:string="";
  fin:string="";
  descripcion:string="";
  subscription?: Subscription;

  constructor(
    public modal:NgbModal,
    private experienciaService: ExperienciaService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(formDetailUser: NgForm){
    const id = this.experiencia.id;
    const puesto = this.puesto;
    const empresa = this.empresa;
    const ubicacion = this.ubicacion;
    const inicio = this.inicio;
    const fin = this.fin;
    const descripcion = this.descripcion;
    const editado = { id, puesto, empresa, ubicacion, inicio, fin, descripcion };

    this.experienciaService.editarExperiencia(editado).subscribe((data)=>(
      console.log(data)
    ));
    
    formDetailUser.reset();
  }

}
