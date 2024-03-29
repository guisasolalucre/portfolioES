import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from 'src/app/modelo/Persona';

const httpOptions= {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url: string = "https://lucrecia-guisasola-portafolio.herokuapp.com";

  constructor(private http: HttpClient) { }

  obtenerDatos(): Observable<Persona> {
    return this.http.get<Persona>(`${this.url}/datos`);
  }

  editarPersona(per:Persona): Observable<Persona>{
    return this.http.put<Persona>(`${this.url}/editarPersona/${per.id}`, per, httpOptions)
  }

}
