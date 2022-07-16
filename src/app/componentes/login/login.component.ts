import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Persona } from 'src/app/modelo/Persona';
import { PersonaService } from 'src/app/servicios/servicios-modelo/persona.service';
import { UiService } from 'src/app/servicios/ui.service';
//import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() ventana: string = 'login';

  persona!: Persona;

  loginForm: FormGroup | any;

  logueado: boolean = false;
  subscription?: Subscription;

  constructor(
    public modal: NgbModal,
    private uiService: UiService,
    private router: Router,
    private personaService: PersonaService,
  ) { 
    this.loginForm = new FormGroup({
      user: new FormControl(''),
      pass: new FormControl('')
    });
   }

  ngOnInit(): void {
    this.personaService.obtenerDatos().subscribe(data => {
      this.persona = data;
    });
  }

  onSubmit(){

    if (this.loginForm.value.user === this.persona.usuario && 
      this.loginForm.value.pass === this.persona.password){
      this.uiService.iniciarSesion();
      this.logueado = this.uiService.puedeEditar();

      const logJSON = JSON.stringify(this.loginForm.value)
      sessionStorage.setItem('login', logJSON);

      console.log("se puede editar: " + this.logueado);
      this.router.navigate(['/portafolio'])
    }
    else {
      alert("Usuario o contraseña incorrectos.")
    }
  }

}
