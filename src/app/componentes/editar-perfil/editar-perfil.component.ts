import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  id:String = "info";

  constructor() { }

  ngOnInit(): void {
  }

  cambio(ids:String){
    this.id = ids;
    return this.id;
  }

}
