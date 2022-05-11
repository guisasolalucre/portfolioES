import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    //private autenticacionService:AutenticacionService,
    private router:Router,
    ) {
    this.form = this.formBuilder.group(
      {
        usuario: ['',[Validators.required, Validators.minLength(8)]],
        password: ['',[Validators.required, Validators.minLength(8)]],
        deviceInfo:this.formBuilder.group(
          {
            deviceId: ["17867868768"],
            deviceType: ["DEVICE_TYPE_ANDROID"],
            notificationToken: ["67657575eececc34"]
          }
        )
      }
    )
   }

  ngOnInit(): void {
  };

  get Usuario(){
    return this.form.get("usuario");
  };

  get Password(){
    return this.form.get("password");
  };

  /*onEnviar(evento:Event){
    evento.preventDefault;
    this.autenticacionService.iniciarSesion(this.form.value).subscribe(data=>{
      console.log(JSON.stringify(data));
      this.router.navigate(["/portafolio"]);
    })


      (ngSubmit)="onEnviar($event)"


  }*/

}
