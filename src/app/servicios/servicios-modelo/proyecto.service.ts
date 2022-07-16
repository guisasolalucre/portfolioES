import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from 'src/app/modelo/Proyecto';

const httpOptions= {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  private url = "https://git.heroku.com/infinite-tundra-15546.git"
  
  constructor(
    private http: HttpClient
  ) { }

  obtenerProyectos(): Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(`${this.url}/verProyectos`);
  }

  eliminarProyecto(proy: Proyecto):Observable<Proyecto>{
    return this.http.delete<Proyecto>(`${this.url}/eliminarProyecto/${proy.id}`)
  }

  agregarProyecto(proy:Proyecto):Observable<Proyecto>{
    return this.http.post<Proyecto>(`${this.url}/nuevoProyecto`, proy, httpOptions)
  }

  editarProyecto(proy:Proyecto):Observable<Proyecto>{
    return this.http.put<Proyecto>(`${this.url}/editarProyecto/${proy.id}`, proy, httpOptions)
  }
}
