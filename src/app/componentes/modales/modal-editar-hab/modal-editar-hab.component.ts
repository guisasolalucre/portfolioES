import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Habilidad } from 'src/app/modelo/Habilidad';
import { HabilidadService } from 'src/app/servicios/servicios-modelo/habilidad.service';

@Component({
  selector: 'app-modal-editar-hab',
  templateUrl: './modal-editar-hab.component.html',
  styleUrls: ['./modal-editar-hab.component.css']
})
export class ModalEditarHabComponent implements OnInit {

  @Input() habilidad!: Habilidad;
  listaHabilidades: Habilidad[] = [];

  nombre:string ="";
  porcentaje:number=0;
  subscription?: Subscription;

  constructor(
    public modal:NgbModal,
    private habilidadService: HabilidadService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(formDetailUser: NgForm){
    const id = this.habilidad.id;
    const nombre = this.nombre;
    const porcentaje = this.porcentaje;
    const editado = { id, nombre, porcentaje };

    this.habilidadService.editarHabilidad(editado).subscribe((data)=>(
      console.log(data)
    ));
    
    formDetailUser.reset();

    window.location.reload();
  }

}
