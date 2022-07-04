import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from 'src/app/interfaces/Persona';

const httpOptions= {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url: string = "http://localhost:8080/api";

  constructor(private http: HttpClient) { }

  obtenerDatos(): Observable<any> {
    return this.http.get(this.url + "/datos");
  }

  editarRedes(per:Persona): Observable<Persona>{
    return this.http.put<Persona>(`${this.url}/editarRedes/${per.id}`, per, httpOptions)
  }

  editarAcercade(per:Persona): Observable<Persona>{
    return this.http.put<Persona>(`${this.url}/editarAcercade/${per.id}`, per, httpOptions)
  }

}
