import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from 'src/app/modelo/Habilidad';

const httpOptions= {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {

  private url = "https://infinite-tundra-15546.herokuapp.com"
  
  constructor(
    private http: HttpClient
  ) { }

  obtenerHabilidades(): Observable<Habilidad[]>{
    return this.http.get<Habilidad[]>(`${this.url}/verHabilidades`);
  }

  eliminarHabilidad(hab: Habilidad):Observable<Habilidad>{
    return this.http.delete<Habilidad>(`${this.url}/eliminarHabilidad/${hab.id}`)
  }

  agregarHabilidad(hab:Habilidad):Observable<Habilidad>{
    return this.http.post<Habilidad>(`${this.url}/nuevaHabilidad`, hab, httpOptions)
  }

  editarHabilidad(hab:Habilidad):Observable<Habilidad>{
    return this.http.put<Habilidad>(`${this.url}/editarHabilidad/${hab.id}`, hab, httpOptions)
  }
}
