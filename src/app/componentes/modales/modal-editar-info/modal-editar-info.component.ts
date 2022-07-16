import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Persona } from 'src/app/modelo/Persona';
import { PersonaService } from 'src/app/servicios/servicios-modelo/persona.service';

@Component({
  selector: 'app-modal-editar-info',
  templateUrl: './modal-editar-info.component.html',
  styleUrls: ['./modal-editar-info.component.css']
})
export class ModalEditarInfoComponent implements OnInit {

  @Input() persona!: Persona;

  id: number = 0; 
  nombre: string = "";
  apellido: string = ""
  acercade:string = "";
  ocupacion: string = "";
  ubicacion: string = "";
  fotoPerfil: string = "";
  fotoPortada: string = "";
  github: string = "";
  linkedin: string = "";
  whatsapp: string = "";
  email: string = "";
  usuario: string = "";
  password: string = "";
  subscription?: Subscription;

  constructor(
    public modal:NgbModal,
    private personaService: PersonaService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(formDetailUser: NgForm){
    const id = this.persona.id;
    const nombre = this.persona.nombre;
    const apellido = this.persona.apellido;
    const acercade = this.acercade;
    const ocupacion = this.ocupacion;
    const ubicacion = this.ubicacion;
    const fotoPerfil = this.fotoPerfil;
    const fotoPortada = this.fotoPortada;
    const github = this.github;
    const linkedin = this.linkedin;
    const whatsapp = this.whatsapp;
    const email = this.email;
    const usuario = this.persona.usuario;
    const password = this.persona.password;

    const editado = { id, nombre, apellido, acercade, ocupacion, ubicacion, fotoPerfil,
                      fotoPortada, github, linkedin, whatsapp, email, usuario, password };

    this.personaService.editarPersona(editado).subscribe((data)=>(
      console.log(data)
    ));
    
    formDetailUser.reset();

    window.location.reload();
  }

}
