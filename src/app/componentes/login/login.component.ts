import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Persona } from 'src/app/interfaces/Persona';
import { UiService } from 'src/app/servicios/ui.service';
//import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() persona!: Persona;

  usuario: string = "";
  password: string = "";
  texto: string = "Iniciar sesión";
  inicio: boolean = false;
  subscription?: Subscription;

  constructor(
    public modal: NgbModal,
    private uiService: UiService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(formDetailUser: NgForm){
    const {usuario, password} = this
    const loginUser = {usuario, password }
    console.log(loginUser);
    formDetailUser.reset();

    if (usuario === this.persona.usuario && 
      password === this.persona.password){
      this.uiService.toggleEdit();
      this.inicio = this.uiService.estadoBoolean();
      console.log("Sera posible ESTO: "+this.uiService.estadoBoolean());
    }
    else {
      alert("Usuario o contraseña incorrectos.")
    }
  }

  cerrarSesion(){
    this.uiService.toggleEdit();
    this.inicio = this.uiService.estadoBoolean();
    console.log("Sera posible ESTO: "+this.uiService.estadoBoolean());
  }

}
